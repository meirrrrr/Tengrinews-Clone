import "./footer.css";
import logo from "../../components/global/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-menu">
          <ul>
            <li>Home</li>
            <li>News</li>
            <li>Articles</li>
            <li>Weather</li>
            <li>Travel</li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="footer-terms">
          <ul>
            <li>Terms of Use</li>
            <li>About the Tengri</li>
            <li>Privacy Policy</li>
            <li>Contact the BBC</li>
            <li>Contact technical support</li>
          </ul>
        </div>
        <div className="footer-copyrights">
          <p>
            Copyright 2024 Tengrinews. All rights reserved. The Tengrinews{" "}
            <i>i not responsible for the content of external sites.</i>
            <span>&nbsp; Read about our approach to external linking.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
