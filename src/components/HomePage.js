import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Style.css";
const Homepage = () => {
  return (
    <div>
      <nav className="nav">
        <h1>Welcome to Food Recipe</h1>
        <ul>
          <li>
            <Link to="/">Go to Home</Link>
          </li>
          <li>
            <Link to="/recipe">About Recipe</Link>
          </li>
          <li>
            <Link to="/login">Login Here</Link>
          </li>
        </ul>
      </nav>

     
      <Outlet />
    </div>
  );
};

export default Homepage;
