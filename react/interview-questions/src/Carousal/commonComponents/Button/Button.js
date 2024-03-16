import React from "react";

const Button = ({
  text = "",
  className = "",
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
