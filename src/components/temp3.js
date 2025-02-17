import "../styles/temp_preview.css";
import temp3 from "../images/temp3.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Temp3() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { formData } = location.state || {};
  return (
    <>
      <p className="title">Template 3</p>
      <div className="container">
        <img className="temp_img" src={temp3} alt="temp3" />
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
              navigate("/resume3", { state: { formData } });
            }}
          >
            Confirm this template
          </button>
        </div>
      </div>
    </>
  );
}
