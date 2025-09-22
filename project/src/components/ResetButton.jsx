import React from "react";
import { ArrowClockwise } from "react-bootstrap-icons";
import ConfigButton from "./ConfigButton";
import { useCounter } from "../context/CounterContext";

function ResetButton() {
  const { reset } = useCounter();

  return (
    <ConfigButton title="Reset" onClick={reset}>
      <ArrowClockwise />
    </ConfigButton>
  );
}

export default ResetButton;
