import "../styles/resume1.css";
import { useNavigate, useLocation } from "react-router-dom";

const Resume1 = () => {
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
      <>
        <div className="container-resume1">
          <p className="name">{formData.name}</p>
          <p>{formData.email}</p>
          {/* Render other data */}
        </div>
      </>
    );
  }
};

export default Resume1;
