import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" onClick={()=>navigate('/')}/>
      <ul className="navbar-menu">
        <li 
          onClick={() => {
            setMenu("home");
            navigate("/")
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <a href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a href="#app-download"
          onClick={() => {setMenu("mobile-app")
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" onClick={()=>navigate('/cart')}/>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>{setShowLogin(true)}}>Signin</button>
      </div>
    </div>
  );
};

export default Navbar;
