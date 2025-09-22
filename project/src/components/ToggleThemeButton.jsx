import React from "react";
import { Moon, MoonFill } from "react-bootstrap-icons";
import ConfigButton from "./ConfigButton";
import { useTheme } from "../context/ThemeContext";

function ToggleThemeButton() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ConfigButton title="Dark mode" onClick={toggleTheme}>
      {isDarkTheme ? <MoonFill /> : <Moon />}
    </ConfigButton>
  );
}

export default ToggleThemeButton;
