import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import URL from "../../utils/strapi_connection";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(searchTerm);
  const [suggestions, setSuggestions] = useState([]);

  const router = useRouter();

  // Set up debounce timer to throttle requests
  useEffect(() => {
    const debounceTimer = 400;

    const timerId = setTimeout(() => {
      setDebouncedQuery(searchTerm);
    }, debounceTimer);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  // Fetch and filter articles based on debounced search term
  useEffect(() => {
    const search = async () => {
      try {
        const res = await fetch(
          `${URL}?filters[title][$containsi]=${debouncedQuery}&pagination[limit]=10` // limit to 10 suggestions max
        );
        const { data } = await res.json();

        setSuggestions(data);
      } catch (e) {
        console.warn(e.message);
      }
    };
    search();
  }, [debouncedQuery]);

  // Navigate to article and clear search term and debounced query forcing the options menu to hide
  const forwardToArticle = (id) => {
    router.push(`/blog/${id}`);

    setSearchTerm("");
    setDebouncedQuery("");
  };

  return (
    <>
      {searchTerm && (
        <div // Backdrop
          onClick={() => {
            setSearchTerm("");
            setDebouncedQuery("");
          }}
          className="bg-black opacity-60 fixed top-0 z-10 right-0 w-screen h-screen"
        ></div>
      )}

      <div className="relative max-w-full z-20">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="py-1.5 pl-3.5 w-full rounded-md border-2 border-green-700 focus:outline-none focus:border-green-500 transition-colors"
          type="text"
          placeholder="Search..."
        />
        <ul className="absolute w-full  rounded-md ">
          {debouncedQuery &&
            suggestions.map(({ id, attributes: { title } }) => (
              <li
                aria-label="option"
                key={id}
                onClick={() => forwardToArticle(id, true)}
                className="bg-white py-1.5 px-3.5 border-b text-[18px] rounded-md hover:bg-green-100 cursor-pointer active:bg-green-300 transition-colors "
              >
                {title}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
