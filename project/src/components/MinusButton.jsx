import React from "react";
import CounterButton from "./CounterButton";
import { DashLg } from "react-bootstrap-icons";
import { useCounter } from "../context/CounterContext";

function MinusButton() {
  const { decrement } = useCounter()
  
  return (
    <CounterButton title='Decrease' onClick={decrement}>
      <DashLg />
    </CounterButton>
  );
}

export default MinusButton;
