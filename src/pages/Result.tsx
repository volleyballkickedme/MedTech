import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const processedData = location.state?.processedData || "No data available.";

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Processed Output</h1>
      <p className="p-4 border border-gray-300 rounded-md w-full max-w-lg bg-gray-50 shadow">
        {processedData}
      </p>
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
