import React, { useState } from "react";
import FilePreview from "./FilePreview";

interface UploadFormProps {
  onUpload: (file: File | null, text: string) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setText(""); // Clear text if file is selected
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setFile(null); // Clear file if text is entered
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpload(file, text);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload an Image or Enter Text</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Upload */}
        <input
          type="file"
          accept="image/*"
          className="block w-full border border-gray-300 rounded-md p-2"
          onChange={handleFileChange}
        />

        {/* Text Input */}
        <textarea
          placeholder="Or enter text here..."
          className="block w-full border border-gray-300 rounded-md p-2"
          rows={3}
          value={text}
          onChange={handleTextChange}
        />

        {/* ✅ File/Text Preview */}
        <FilePreview file={file} text={text} />

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadForm;

