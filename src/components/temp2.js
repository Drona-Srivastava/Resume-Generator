import "../styles/temp_preview.css";
import temp2 from "../images/temp2.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Temp2() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { formData } = location.state || {};
  return (
    <>
      <p className="title">Template 2</p>
      <div className="container">
        <img className="temp_img" src={temp2} alt="temp2" />
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
              navigate("/resume2", { state: { formData } });
            }}
          >
            Confirm this template
          </button>
        </div>
      </div>
    </>
  );
}
