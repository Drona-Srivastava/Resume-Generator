import "../styles/temp_preview.css";
import temp4 from "../images/temp4.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Temp4() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { formData } = location.state || {};
  return (
    <>
      <p className="title">Template 4</p>
      <div className="container">
        <img className="temp_img" src={temp4} alt="temp4" />
        <div className="container2">
          <button
            className="temp_button"
            onClick={() => navigate("/template", { state: { formData } })}
          >
            Explore other templates
          </button>
          <button
            className="temp_button"
            onClick={() => {
              navigate("/resume4", { state: { formData } });
            }}
          >
            Confirm this template
          </button>
        </div>
      </div>
    </>
  );
}
