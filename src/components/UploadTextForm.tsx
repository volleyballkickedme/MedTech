import React, { useState } from "react";
import FilePreview from "./FilePreview";
import InputToggle from "./InputToggle";

interface UploadTextFormProps {
  onUpload: (file: File | null, text: string) => void;
}

const UploadForm: React.FC<UploadTextFormProps> = ({ onUpload }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpload(null, text);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Enter Text</h2>
      {/* Input Toggle */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Text Input */}
        <textarea
          placeholder="Or enter text here..."
          className="block w-full border border-gray-300 rounded-md p-2"
          rows={3}
          value={text}
          onChange={handleTextChange}
        />

        {/* ✅ File/Text Preview */}
        <FilePreview file={null} text={text} />

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadForm;

