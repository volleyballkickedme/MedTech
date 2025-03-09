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
    <div className="bg-red-500 flex flex-col justify-center items-center h-screen">
      <InputToggle isTextInput={isTextInput} setIsTextInput={setIsTextInput}/>
      {isTextInput ? (
        <UploadTextForm onUpload={handleUpload} type="text" />
      ) : (
        <UploadFileForm onUpload={handleUpload} type="file" />
      )}
    </div>
  );
};

export default Home;
