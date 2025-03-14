import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Processing from "./pages/Process";
import Result from "./pages/Result";
import { DataProvider } from "./context/DataContext";

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};


export default App;

