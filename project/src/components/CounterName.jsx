import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useCounter } from "../context/CounterContext";

function CounterName() {
  const { isDarkTheme } = useTheme();
  const { counterName, setCounterName } = useCounter();

  const onChange = (event) => {
    setCounterName(event.target.value);
  };

  return (
    <div className="counter-name">
      <input
        className={`counter-name__input ${
          isDarkTheme ? "counter-name__input--dark" : ""
        }`}
        type="text"
        placeholder="Name"
        value={counterName}
        onChange={onChange}
      />
    </div>
  );
}

export default CounterName;
