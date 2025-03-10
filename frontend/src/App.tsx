import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Processing from "./pages/Process";
import Result from "./pages/Result";
import Test from "./components/Test";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};


export default App;

