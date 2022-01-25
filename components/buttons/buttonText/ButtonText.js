const ButtonText = ({ text = "default text", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-medium text-black opacity-60 text-[18px] hover:opacity-100 transition"
    >
      {text}
    </button>
  );
};

export default ButtonText;
