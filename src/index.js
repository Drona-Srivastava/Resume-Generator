import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/home.js";
import ResumeForm from "./components/form.js";
import Template from "./components/template.js";
import Temp1 from "./components/temp1.js";
import Temp2 from "./components/temp2.js";
import Temp3 from "./components/temp3.js";
import Temp4 from "./components/temp4.js";
import Resume1 from "./components/resume1.js";
import Resume2 from "./components/resume2.js";  
import Resume3 from "./components/resume3.js";  
import Resume4 from "./components/resume4.js";  

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
        <Route path="/resume2" element={<Resume2 />} />
        <Route path="/resume3" element={<Resume3 />} />
        <Route path="/resume4" element={<Resume4 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
