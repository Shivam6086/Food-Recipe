import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const [userId, setUserName] = useState();
  const [pwd, setPassword] = useState();
  const navig = useNavigate();
  
  const passHandler = (event) => {
    setPassword(event.target.value);
  };
  

  const Handler = (event) => {
    event.preventDefault();
    if (userId === "Shivam.singh" && pwd === "Shivam@123") {
      console.log(userId + pwd);
      navig("/recipe");
    } else {
      alert("UserId Or Password not Match");
    }
  };
  const userHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="login-page">
      <h1>Welcome Back</h1>
      <form>
        <input type="text" placeholder="Please enter UserId" onChange={userHandler} />
        <input
          type="password"
          placeholder="Please enter Password"
          onChange={passHandler}
        />
        <button type="button" onClick={Handler}>
          LoginIn Here
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
