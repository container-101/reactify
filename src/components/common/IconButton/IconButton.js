import React from "react";
import { Icon } from "components";
import "./IconButton.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

function IconButton({
  name,
  type,
  onClick,
  children,
  className,
  size,
  svgClass,
  disabled,
}) {
  const btnClass = classNames("iconButton", className);

  return (
    <button
      onClick={onClick}
      type={type}
      className={btnClass}
      whileTap={{ scale: 0.9 }}
      key="icon-button"
      disabled={disabled}
    >
      <Icon name={name} size={size} className={svgClass} />
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  type: "button",
  size: 24,
  svgClass: "",
  disabled: false,
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  onClick: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  svgClass: PropTypes.string,
  disabled: PropTypes.bool,
};

export default IconButton;
