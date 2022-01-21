import React from "react";

const ButtonOutlined = ({ text = "Default text" }) => {
  return (
    <button className="text-green-700 font-medium border-2 border-green-700 rounded-md py-1.5 px-3.5 hover:text-green-500 hover:border-green-500 transition hover:scale-95 active:scale-100 ">
      {text}
    </button>
  );
};

export default ButtonOutlined;
