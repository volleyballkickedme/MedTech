import React, { useState } from "react";
import UploadFileForm from "../components/UploadFileForm";
import UploadTextForm from "../components/UploadTextForm";
import { useNavigate } from "react-router-dom";
import InputToggle from "../components/InputToggle";

const Home: React.FC = () => {
  const [isTextInput, setIsTextInput] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (file: File | null, text: string) => {
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
