import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home.js";
import ResumeForm from "./components/form.js";
import Template from "./components/template.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
