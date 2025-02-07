import "../styles/temp_preview.css";
import temp2 from "../templates/temp2.png";
import { useNavigate } from "react-router-dom";

export default function Temp2() {
  const Navigate = useNavigate();
  return (
    <>
      <p className="title">Template 2</p>
      <div className="container">
        <img className="temp_img" src={temp2} alt="temp2" />
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
