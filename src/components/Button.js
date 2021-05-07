import React from "react";

const STYLES = ["btn--primary", "btn--primary--outlined", "btn--secondary"];

const SIZES = ["btn--medium", "btn--small"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle //if
    : STYLES[0]; // else

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize //if
    : SIZES[0]; // else

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
