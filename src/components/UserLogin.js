import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const [userId, setUserName] = useState();
  
  const navig = useNavigate();
  const [pwd, setPassword] = useState();
  
  const passHandler = (event) => {
    setPassword(event.target.value);
  };
  

  const Handler = (event) => {
    event.preventDefault();
    if (userId === "Shivam.singh" && pwd === "Shivam@123") {
    
      navig("/getrecipe");
    } else {
      alert("Something went wrong");
    }
  };
  const userHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="login-page">
      <h1>Welcome Back</h1>
      <form>
        <input type="text" placeholder="UserId Please" onChange={userHandler} />
        <input
          type="password"
          placeholder="Password please"
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
