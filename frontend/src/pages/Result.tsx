import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import doctorConsultImage from "../assets/doctor_consult.png"; // Import the image

const Result: React.FC = () => {
  const navigate = useNavigate();
  const { processedData } = useData();

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

      {/* Result Box */}
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-3xl text-center border-t-8 border-red-500 relative z-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Processed Output</h2>
        <p className="text-gray-600 mb-6">
          Below are the predicted diagnoses based on your input.
        </p>

        {/* Output Box */}
        <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md text-left max-w-lg mx-auto">
          {processedData.length > 0 ? (
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {processedData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No data available.</p>
          )}
        </div>

        {/* Call to Action Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition shadow-md"
        >
          Upload Another
        </button>
      </div>
    </div>
  );
};

export default Result;