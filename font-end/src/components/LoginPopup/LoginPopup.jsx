import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./LoginPopup.css";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {url, setToken} = useContext(StoreContext);
  const onChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async(event)=>{
    event.preventDefault()
    let newUrl = url;
    if(currState==="Login"){
      newUrl += "/api/user/login";
    }
    else{
      newUrl += "/api/user/register";
    }
     const response =await  axios.post(newUrl, data);
     if(response){
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token)
        setShowLogin(false)
     }
     else{
      alert(response.data.message)
     }

  }
  return (
    <div className="login-popup">
      <form action="" onSubmit={onLogin} className="login-popup-container">
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
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={onChangeData}
                required
                value={data.name}
              />
            </>
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your email" name="email" onChange={onChangeData} required value={data.email} />
          <input type="password" placeholder="Password" required name="password" onChange={onChangeData} value={data.password}/>
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, i agree to the terms of use <br />& privacy policy.
          </p>
        </div>
        {currState === "Login" ? (
          <>
            {" "}
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
            </p>
          </>
        ) : (
          <>
            {" "}
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login Here</span>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
