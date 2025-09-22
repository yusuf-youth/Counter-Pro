import React from "react";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

function Controls() {
  return (
    <ul className="controls">
      <li className="controls__item">
        <MinusButton />
      </li>
      <li className="controls__item">
        <PlusButton />
      </li>
    </ul>
  );
}

export default Controls;
