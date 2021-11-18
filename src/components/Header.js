import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const myCallback = () => {
    console.log("clicked");
    window.location.href = "https://www.google.com";
  };
  return (
    <div className="header_container">
      <div className="header_content">
        <div className="header_item">
          <a onClick={myCallback}>To google</a>
        </div>
        <div className="header_item">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="header_item">
          <NavLink exact to="/about">
            About
          </NavLink>
        </div>
        <div className="header_item">
          <NavLink exact to="/about/Kim">
            About Kim
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
