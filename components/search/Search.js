/**
 * 1. Get user input through onKeyUp
 *
 * 2. Use ?filters[filed][filterOption]=searchQuery to search through availble articles through onChange
 *    Maybe only return id and title with query
 *
 *  a) Map through response and return an array of titles? or map directly through response
 *
 * 3. render a list of titles
 *
 * 4. on click router.push to article
 */

import React from "react";

// Demo array
const suggestions = [
  {
    id: 2,
    title: "Why are Hobbits so small?",
  },
  {
    id: 3,
    title: "Can I live up to 150 years old?",
  },
  {
    id: 6,
    title: "Wireless charger killed my rat!",
  },
];

const Search = () => {
  return (
    <div className="relative w-[300px]">
      <input
        className="py-1.5 pl-3.5 pr-[100px] rounded-md border-2 border-green-700 focus:outline-none focus:border-green-500 transition-colors "
        type="text"
        placeholder="Search..."
        name="autocomplete"
        id="autocomplete"
      />
      <ul className="absolute bg-blue-200 w-full  rounded-md ">
        {suggestions.map(({ id, title }) => (
          <li
            key={id}
            className="bg-white py-1.5 px-3.5 border-b text-[18px] hover:bg-green-100 cursor-pointer active:bg-green-300 transition-colors "
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
