import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleUpload = (file: File | null, text: string) => {
    navigate("/processing");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <UploadForm onUpload={handleUpload} />
    </div>
  );
};

export default Home;
