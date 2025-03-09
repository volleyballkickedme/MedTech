import React, { useState } from "react";

interface InputToggleProps {
  isTextInput: boolean;
  setIsTextInput: (isTextInput: boolean) => void;
}

const InputToggle: React.FC<InputToggleProps> = ({isTextInput, setIsTextInput}) => {

  return (
    <div className="w-full max-w-lg flex flex-col items-center space-y-4">
      {/* Toggle Button */}
      <div className="flex bg-gray-400 p-2 w-100 rounded-md">
        <button
          onClick={() => setIsTextInput(true)}
          className={`flex-1 px-4 py-2 text-white transition ${
            isTextInput ? "bg-gray-500" : "bg-transparent"
          }`}
        >
          Text
        </button>
        <button
          onClick={() => setIsTextInput(false)}
          className={`flex-1 px-4 py-2 text-white transition ${
            !isTextInput ? "bg-gray-500" : "bg-transparent"
          }`}
        >
          Image
        </button>
      </div>
    </div>
  );
};

export default InputToggle;
