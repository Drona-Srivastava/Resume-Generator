import "../styles/temp_preview.css";
import temp1 from "../templates/temp1.png";
import { useNavigate } from "react-router-dom";

export default function Temp1() {
  const Navigate = useNavigate();
  return (
    <>
      <p className="title">Template 1</p>
      <div className="container">
        <img className="temp_img" src={temp1} alt="temp1" />
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
