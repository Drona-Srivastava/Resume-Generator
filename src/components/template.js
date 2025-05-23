import "../styles/template.css";
import temp1 from "../images/temp1.png";
import temp2 from "../images/temp2.png";
import temp3 from "../images/temp3.png";
import temp4 from "../images/temp4.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResumeTemplate() {
  const navigate = useNavigate(); 
  const location = useLocation();
  console.log(location.state);
  const { formData } = location.state || {};

  return (
    <>
      <h3 id="thish3">Choose a Resume Template</h3>
      {/* {formData ? <h1>{formData.name} HI</h1> : <h1>No Form Data</h1>} */}
      <div className="container">
        <div className="temps">
          <img
            src={temp1}
            alt="temp1"
            className="images"
            onClick={() => {
              navigate("/temp1", { state: { formData } });
            }}
          />
        </div>
        <div className="temps">
          <img
            src={temp2}
            alt="temp2"
            className="images"
            onClick={() => {
              navigate("/temp2", { state: { formData } });
            }}
          />
        </div>
        {/* <div className="temps">
          <img
            src={temp3}
            alt="temp3"
            className="images"
            onClick={() => {
              navigate("/temp3", { state: { formData } });
            }}
          />
        </div> */}
        <div className="temps">
          <img
            src={temp4}
            alt="temp4"
            className="images"
            onClick={() => {
              navigate("/temp4", { state: { formData } });
            }}
          />
        </div>
      </div>
      <p className="rtp">Click to get a better view</p>
    </>
  );
}
