import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Style.css";
const Homepage = () => {
  return (
    <div>
      <nav className="top">
        <h1>Welcome to Food Recipe</h1>
        <ul>
        <li>
            <Link to="/getrecipe">About Recipe</Link>
          </li>
          <li>
            <Link to="/">Go to Home</Link>
          </li>
          <li>
            <Link to="/getlogin">Login Here</Link>
          </li>
        </ul>
      </nav>

     
      <Outlet />
    </div>
  );
};

export default Homepage;
