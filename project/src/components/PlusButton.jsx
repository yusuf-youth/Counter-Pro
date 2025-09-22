import React from "react";
import CounterButton from "./CounterButton";
import { PlusLg } from "react-bootstrap-icons";
import { useCounter } from "../context/CounterContext";

function PlusButton() {
  const {increment} = useCounter()

  return (
    <CounterButton title="Increase" onClick={increment}>
      <PlusLg />
    </CounterButton>
  );
}

export default PlusButton;
