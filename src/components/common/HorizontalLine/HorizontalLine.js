import React from "react";
import PropTypes from "prop-types";

const HorizontalLine = ({ height, className, color, margin }) => {
  return (
    <hr
      style={{
        backgroundColor: color,
        height: height,
        border: 0,
        margin: margin,
      }}
      className={className}
    />
  );
};

HorizontalLine.defaultProps = {
  height: 1,
  className: "",
  color: "#DDDDDD",
  margin: 0,
};

HorizontalLine.propTypes = {
  height: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.number,
};

export default HorizontalLine;
