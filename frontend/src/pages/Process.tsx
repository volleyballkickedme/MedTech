import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Process: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Simulate processing time (e.g., calling an LLM API)
    setTimeout(() => {
      navigate("/result", { state: { processedData: "Processed content from LLM." } });
    }, 3000); // 3-second delay
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center text-xl text-gray-700">
      <p>Processing your content...</p>
    </div>
  );
};

export default Process;
