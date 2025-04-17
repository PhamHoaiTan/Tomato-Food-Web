import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import './LoginPopup.css'
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" ? (
            <>
              <input type="text" placeholder="Your Name" required />
            </>
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use <br />& privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <>
            {" "}
            <p>
              Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span>
            </p>
          </>
        ) : (
          <>
            {" "}
            <p>
              Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
