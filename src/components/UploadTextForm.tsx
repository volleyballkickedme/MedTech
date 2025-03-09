import React, { useState } from "react";
import FilePreview from "./FilePreview";

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
    <div className="p-6 w-full max-w-lg mx-auto bg-white shadow-lg rounded-xl min-h-[400px] flex flex-col">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Enter Text</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Text Input */}
        <textarea
          placeholder="Or enter text here..."
          className="block w-full border border-gray-300 rounded-md p-2"
          rows={5}
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


