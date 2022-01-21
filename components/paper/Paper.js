import React from "react";

const Paper = ({ children, hover = false }) => {
  return (
    <div
      className={`overflow-hidden bg-white rounded-md shadow-md border ${
        hover
          ? "hover:border hover:border-green-700 hover:cursor-pointer hover:shadow-xl transition"
          : ""
      } `}
    >
      {children}
    </div>
  );
};

export default Paper;
