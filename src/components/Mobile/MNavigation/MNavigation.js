import React from "react";
import PropTypes from "prop-types";
import "./MNavigation.scss";

const MNavigation = ({ color, children }) => {
  return (
    <div className="Nav-container">
      <div className="Nav-content"></div>
      <div className="Nav-content"></div>
      <div className="Nav-content"></div>
      <div className="Nav-content"></div>
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
