import React from "react";

const ButtonText = ({ text = "default text" }) => {
  return (
    <button className="font-medium text-black opacity-60 text-[18px] hover:opacity-100 transition">
      {text}
    </button>
  );
};

export default ButtonText;
