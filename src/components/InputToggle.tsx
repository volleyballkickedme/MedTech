import React, { useState } from "react";

const InputToggle: React.FC = () => {
  const [isTextInput, setIsTextInput] = useState(true);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Toggle Button */}
      <div className="flex bg-green-500 p-2 rounded-full w-48">
        <button
          onClick={() => setIsTextInput(true)}
          className={`flex-1 px-4 py-2 text-white rounded-full transition ${
            isTextInput ? "bg-green-700" : "bg-transparent"
          }`}
        >
          Text
        </button>
        <button
          onClick={() => setIsTextInput(false)}
          className={`flex-1 px-4 py-2 text-white rounded-full transition ${
            !isTextInput ? "bg-green-700" : "bg-transparent"
          }`}
        >
          Image
        </button>
      </div>

      {/* Input Fields */}
      {isTextInput ? (
        <div className="w-full">
          <label htmlFor="textInput" className="block text-gray-700 font-semibold">
            Enter Text:
          </label>
          <input
            type="text"
            id="textInput"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-400"
            placeholder="Type something..."
          />
        </div>
      ) : (
        <div className="w-full">
          <label htmlFor="imageUpload" className="block text-gray-700 font-semibold">
            Upload Image:
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="block w-full text-gray-900 file:bg-green-500 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none file:cursor-pointer hover:file:bg-green-600"
          />
        </div>
      )}
    </div>
  );
};

export default InputToggle;
