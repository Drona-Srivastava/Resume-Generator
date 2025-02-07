import "../styles/template.css";
import temp1 from "../templates/temp1.png";
import temp2 from "../templates/temp2.png";
import temp3 from "../templates/temp3.png";
import temp4 from "../templates/temp4.png";
import { useNavigate } from "react-router-dom";

export default function ResumeTemplate() {
  const Navigate = useNavigate();
  return (
    <>
      <h3>Choose a Resume Template</h3>
      <div className="container">
        <div className="temps">
          <img
            src={temp1}
            alt="temp1"
            className="images"
            onClick={() => {
              Navigate("/temp1");
            }}
          />
        </div>
        <div className="temps">
          <img
            src={temp2}
            alt="temp2"
            className="images"
            onClick={() => {
              Navigate("/temp2");
            }}
          />
        </div>
        <div className="temps">
          <img
            src={temp3}
            alt="temp3"
            className="images"
            onClick={() => {
              Navigate("/temp3");
            }}
          />
        </div>
        <div className="temps">
          <img
            src={temp4}
            alt="temp4"
            className="images"
            onClick={() => {
              Navigate("/temp4");
            }}
          />
        </div>
      </div>
      <p className="rtp">Click to get a better view</p>
    </>
  );
}
