import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ color, ref, children }) => {
  return (
    <button ref={ref} style={{ color: color }} className="Button" type="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "",
  primary: false,
};

Button.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.bool,
};

export default forwardRef(Button);
