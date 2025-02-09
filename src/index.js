import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home.js";
import ResumeForm from "./components/form.js";
import Template from "./components/template.js";
import Temp1 from "./temp_preview/temp1.js";
import Temp2 from "./temp_preview/temp2.js";
import Temp3 from "./temp_preview/temp3.js";
import Temp4 from "./temp_preview/temp4.js";
import Resume1 from "./resume_preview/resume1.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/template" element={<Template />} />
        <Route path="/temp1" element={<Temp1 />} />
        <Route path="/temp2" element={<Temp2 />} />
        <Route path="/temp3" element={<Temp3 />} />
        <Route path="/temp4" element={<Temp4 />} />
        <Route path="/resume1" element={<Resume1 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
