import React from "react";

interface FilePreviewProps {
  file: File | null;
  text: string;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, text }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Preview</h3>

      {file ? (
        <div>
          <p className="text-gray-500 mb-2">Image Preview:</p>
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded Preview"
            className="max-w-full h-auto rounded-md shadow"
          />
        </div>
      ) : text ? (
        <div>
          <p className="text-gray-500 mb-2">Text Preview:</p>
          <p className="p-2 bg-gray-100 rounded-md">{text}</p>
        </div>
      ) : (
        <p className="text-gray-400 italic">No file or text selected.</p>
      )}
    </div>
  );
};

export default FilePreview;
