import React from "react";
import { useTheme } from "../context/ThemeContext";

function CounterButton({ title, onClick, className, children }) {
  const { isDarkTheme } = useTheme();
  const modifier = isDarkTheme ? "counter-button--light-shadow" : null;

  return (
    <button
      className={`counter-button ${modifier} ${className}`}
      title={title}
      onClick={onClick}
    >
      <span className="visually-hidden">{title}</span>
      {children}
    </button>
  );
}

export default CounterButton;
