import "../styles/temp_preview.css";
import temp3 from "../templates/temp3.png";
import { useNavigate } from "react-router-dom";

export default function Temp3() {
  const Navigate = useNavigate();
  return (
    <>
      <p className="title">Template 3</p>
      <div className="container">
        <img className="temp_img" src={temp3} alt="temp3" />
        <div className="container2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quas
          quasi sed voluptates! Velit, autem cupiditate libero tenetur eius
          mollitia eum perspiciatis! Velit reprehenderit facere temporibus ipsam
          similique voluptate iusto!
          <button
            className="temp_button"
            onClick={() => {
              Navigate("/template");
            }}>
            Explore other templates
          </button>
          <button
            className="temp_button"
            onClick={() => {
              Navigate("/template");
            }}>
            Confirm this template
          </button>
        </div>
      </div>
    </>
  );
}
