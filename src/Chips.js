import React, { useState } from "react";

const Chips = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setChips([...chips, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Chips here...</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        className="border-2 border-gray-300 rounded-lg p-2 ml-4"
        placeholder="Type something..."
      />
      <div className="flex flex-wrap mt-4">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="bg-gray-400 text-white rounded-full px-4 py-2 m-1 flex items-center"
          >
            {chip}
            <button
              onClick={() => setChips(chips.filter((_, i) => i !== index))}
              className="ml-2 text-red-300 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chips;
