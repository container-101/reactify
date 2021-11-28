import React, { forwardRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ color, primary = false, ref, children }) => {
  return (
    <button
      ref={ref}
      style={{ color: color }}
      className={classNames("Button", { primary: primary })}
      type="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.bool,
};

export default forwardRef(Button);
