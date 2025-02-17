import "../styles/resume2.css";
import { useNavigate, useLocation } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { formData } = location.state || {};

  if (!formData) {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  } else {
    return (
      <div>
        <h1>{formData.name} HI</h1>
        <p>{formData.email}</p>
        <h2>Supp</h2>
        {/* Render other data */}
      </div>
    );
  }
};

export default Resume;
