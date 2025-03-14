import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const Result: React.FC = () => {
  const navigate = useNavigate();
  const { processedData } = useData();

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Processed Output</h1>
      <div className="p-4 border border-gray-300 rounded-md w-full max-w-lg bg-gray-50 shadow">
        {processedData.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {processedData.map((item, index) => (
              <li key={index} className="text-gray-800">{item}</li> 
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No data available.</p>
        )}
      </div>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Upload Another
      </button>
    </div>
  );
};

export default Result;
