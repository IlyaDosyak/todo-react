import React from "react";

const Button = (props) => {
  const { className = "", type, children, onClick } = props;
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
