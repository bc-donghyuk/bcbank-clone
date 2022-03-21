import React from "react";

import { Routes, Route } from "react-router-dom";

import { useLocation, useNavigate, useParams } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello world</div>} />
      <Route path="about" element={<div>Hello about</div>} />
    </Routes>
  );
};

export default App;
