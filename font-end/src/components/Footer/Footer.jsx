import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            quisquam illum dolor similique quod fuga quibusdam, possimus sint
            nam libero ea officiis, quis atque consequuntur! Aperiam quam optio
            nisi. Magni!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <ul>
            <li>
              <h2>Company</h2>
            </li>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <ul>
            <li>
              {" "}
              <h2>Get It Touch</h2>
            </li>
            <li>+1-221-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 @ tomato.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;
