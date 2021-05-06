import React from "react";

const STYLES = ["btn--primary", "btn--secondary"];

const SIZES = ["btn--small", "btn--medium"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
