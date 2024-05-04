import "./App.css";
import React, { useState } from "react";
import Apicall from "./Api/Apicall";
import Details from "./Components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopModels from "./Components/TopModels";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <TopModels />
          <Routes>
            <Route path="/" element={<Apicall />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
