import React from "react";
import PropTypes from "prop-types";

export default function Button({
  type,
  text,
  color,
  onClick,
  classes,
  children,
}) {
  const buttonStyle = {
    backgroundColor: color,
  };
  return (
    <button
      type={type}
      className={`btn ${classes} `}
      style={buttonStyle}
      onClick={onClick}
    >
      {children ? children : text}
    </button>
  );
}

Button.defaultProps = {
  text: "Button",
  color: "black",
  classes: "",
  type: "button",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
