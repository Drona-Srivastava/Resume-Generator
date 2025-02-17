import "../styles/temp_preview.css";
import temp1 from "../images/temp1.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Temp1() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { formData } = location.state || {};

  return (
    <>
      <p className="title">Template 1</p>
      <div className="container">
        <img className="temp_img" src={temp1} alt="temp1" />
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
              navigate("/resume1", { state: { formData } });
            }}
          >
            Confirm this template
          </button>
        </div>
      </div>
    </>
  );
}
