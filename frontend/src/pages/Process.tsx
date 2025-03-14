import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import doctorConsultImage from "../assets/doctor_consult.png"; // Import the image

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100 relative pt-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 w-full h-16 bg-blue-200 rounded-b-full opacity-50"></div>

      {/* Doctor Image - Bigger, Underlapping, Positioned in Top Right */}
      <div className="absolute top-[-40px] right-[-40px] w-64 h-64 md:w-80 md:h-80 z-[-1]">
        <img
          src={doctorConsultImage}
          alt="Doctor Consultation"
          className="w-full h-full object-cover rounded-full opacity-90"
        />
      </div>

      {/* Header */}
      <header className="text-5xl font-bold text-blue-700 mb-8">
        <span className="text-red-500">🏥 MedView</span>
      </header>

      {/* Processing Box */}
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-3xl text-center border-t-8 border-red-500 relative z-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Processing Your Content...
        </h2>
        <p className="text-gray-600 mb-6">
          Please wait while we analyze the uploaded data and generate a diagnosis.
        </p>

        {/* Loading Animation */}
        <div className="flex justify-center items-center mt-6">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
        </div>

        {/* Informational Message */}
        <p className="mt-6 text-gray-500">This may take a few seconds ⏳</p>
      </div>
    </div>
  );
};

export default Process;