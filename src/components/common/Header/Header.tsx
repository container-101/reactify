import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@components/common";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header_container">
      <div className="Header_content">
        <div className="Header_item">
          <img className="Header_logo" src="/logo.png" alt="logo" />
        </div>
        {/* <Icon name="notification" /> */}
      </div>
      <div className="Header_content">
        <div className="Header_item">
          <Button>G</Button>
        </div>
        <div className="Header_item">
          <NavLink to="/">
            <Button>Home</Button>
          </NavLink>
        </div>
        <div className="Header_item">
          <NavLink to="/about">
            <Button>Info</Button>
          </NavLink>
        </div>
      </div>
      <div className="Header_content">
        <div className="Header_item">Popper</div>
      </div>
    </div>
  );
};

export default Header;
