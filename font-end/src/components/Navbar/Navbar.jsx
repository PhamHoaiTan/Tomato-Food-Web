import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("home");
            navigate("/");
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => {
            setMenu("menu");
            navigate("/menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => {setMenu("mobile-app")
            navigate("/mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Signin</button>
      </div>
    </div>
  );
};

export default Navbar;
