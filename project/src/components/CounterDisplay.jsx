import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useCounter } from "../context/CounterContext";

function CounterDisplay({ value }) {
  const { isDarkTheme } = useTheme();
  const { count } = useCounter();
  const modifier = isDarkTheme ? "counter-display--light" : null;

  return <h1 className={`counter-display ${modifier}`}>{count}</h1>;
}

export default CounterDisplay;
