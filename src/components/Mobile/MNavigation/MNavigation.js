import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./MNavigation.scss";

const MNavigation = ({ color, children }) => {
  return (
    <div className="Nav-container">
      <div className="Nav-content">
        <NavLink exact to="/">
          <img src="/logo.png" alt="home" />
        </NavLink>
      </div>
      <div className="Nav-content">
        <NavLink exact to="/account">
          <img src="/assets/account.svg" alt="account" />
        </NavLink>
      </div>
      <div className="Nav-content">
        <NavLink exact to="/noti">
          <img src="/assets/notification.svg" alt="noti" />
        </NavLink>
      </div>
      <div className="Nav-content">
        <NavLink exact to="/star">
          <img src="assets/star.svg" alt="star" />
        </NavLink>
      </div>
    </div>
  );
};

MNavigation.defaultProps = {
  color: "",
  primary: false,
};

MNavigation.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.bool,
};

export default MNavigation;
