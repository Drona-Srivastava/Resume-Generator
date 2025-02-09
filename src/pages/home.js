import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Footer from "./footer.js";
import logo from "../images/EasyCV.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to <img className="home_logo" src={logo} alt="" /></h1>
      <p className="home-description">
        Create a professional resume in minutes with our easy-to-use tool.
      </p>
      <button className="home-button" onClick={() => navigate("/resume")}>
        Start Creating
      </button>
      <Footer />
    </div>
  );
}
