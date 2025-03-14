import React, { useState } from "react";
import UploadFileForm from "../components/UploadFileForm";
import UploadTextForm from "../components/UploadTextForm";
import { useNavigate } from "react-router-dom";
import InputToggle from "../components/InputToggle";
import { processFile, processText } from "../api/api";
import { useData } from "../context/DataContext";

const Home: React.FC = () => {
  const [isTextInput, setIsTextInput] = useState(false);
  const navigate = useNavigate();
  const { setProcessedData } = useData();

  const handleUpload = async (file: File | null, text: string) => {
    // fetch from backend
    if (!file && !text) {
      console.error("No file or text provided");
      return;
    }

    if (file) {
      try {
        const diseases = await processFile(file);
        setProcessedData(diseases);
      } catch (error) {
        console.error("Error processing file:", error);
        setProcessedData(["Error processing file"]);
      }
    }

    if (text) {
      try {
        const diseases = await processText(text);
        setProcessedData(diseases);
      } catch (error) {
        console.error("Error processing text:", error);
        setProcessedData(["Error processing text"]);
      }
    }
    navigate("/processing");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <InputToggle isTextInput={isTextInput} setIsTextInput={setIsTextInput}/>
      {isTextInput ? (
        <UploadTextForm onUpload={handleUpload} />
      ) : (
        <UploadFileForm onUpload={handleUpload} />
      )}
    </div>
  );
};

export default Home;
