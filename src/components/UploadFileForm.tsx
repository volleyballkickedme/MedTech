import React, { useState } from "react";
import FilePreview from "./FilePreview";

interface UploadFileFormProps {
  onUpload: (file: File | null, text: string) => void;
}

const UploadFileForm: React.FC<UploadFileFormProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpload(file, "");
  };

  return (
    <div className="p-6 w-full max-w-lg mx-auto bg-white shadow-lg rounded-xl min-h-[400px] flex flex-col">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload an Image</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Upload */}
        <input
          type="file"
          accept="image/*"
          className="block w-full border border-gray-300 rounded-md p-2 h-[140px]"
          onChange={handleFileChange}
        />

        {/* ✅ File/Text Preview */}
        <FilePreview file={file} text="" />

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadFileForm;


