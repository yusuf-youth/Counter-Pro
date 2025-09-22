import React from "react";
import { useTheme } from "../context/ThemeContext";

function ConfigButton({ title, onClick, children }) {
  const { isDarkTheme } = useTheme();
  const modifier = isDarkTheme ? 'config--light' : null

  return (
    <button className={`settings-button config ${modifier}`} title={title} onClick={onClick}>
      <span className="visually-hidden">{title}</span>
      {children}
    </button>
  );
}

export default ConfigButton;
