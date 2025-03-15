import React, { useState } from "react";
import UploadFileForm from "../components/UploadFileForm";
import UploadTextForm from "../components/UploadTextForm";
import { useNavigate } from "react-router-dom";
import InputToggle from "../components/InputToggle";
import { processFile, processText } from "../api/api";
import { useData } from "../context/DataContext";
import doctorConsultImage from "../assets/doctor_consult.png"; // Import the image

const Home: React.FC = () => {
  const [isTextInput, setIsTextInput] = useState(false);
  const navigate = useNavigate();
  const { setProcessedData } = useData();

  const handleUpload = async (file: File | null, text: string) => {
    if (!file && !text) {
      console.error("No file or text provided");
      return;
    }

    try {
      const diseases = file ? await processFile(file) : await processText(text);
      setProcessedData(diseases);
    } catch (error) {
      console.error("Error processing input:", error);
      setProcessedData(["Error processing input"]);
    }
    navigate("/processing");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100 relative pt-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 w-full h-16 bg-blue-200 rounded-b-full opacity-50"></div>

      {/* Doctor Image - Bigger, Underlapping Form, Positioned in Top Right */}
      <div className="absolute top-[-60px] right-[-60px] w-800 h-800 md:w-100 md:h-100 z-10 overflow-hidden">
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

      {/* Main Content */}
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-3xl text-center border-t-8 border-red-500 relative z-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Upload Patient Notes for Diagnosis
        </h2>
        <p className="text-gray-600 mb-6">
          Upload a document or enter text to receive AI-powered diagnosis predictions.
        </p>

        {/* Input Toggle - Centered & Aligned */}
        <div className="flex justify-center mb-8">
          <InputToggle isTextInput={isTextInput} setIsTextInput={setIsTextInput} />
        </div>

        {/* Upload Forms */}
        <div className="mt-6">
          {isTextInput ? (
            <UploadTextForm onUpload={handleUpload} />
          ) : (
            <UploadFileForm onUpload={handleUpload} />
          )}
        </div>

        {/* Call to Action */}
        <p className="mt-6 text-gray-500">Your data is secure and confidential 🔒</p>
      </div>
    </div>
  );
};

export default Home;