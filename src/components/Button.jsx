import React from "react";

const Button = (props) => {
  const { className, type, children } = props;
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
