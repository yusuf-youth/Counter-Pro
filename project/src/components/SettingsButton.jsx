import React from "react";
import ConfigButton from "./ConfigButton";
import { GearWideConnected } from "react-bootstrap-icons";

function SettingsButton() {
  return (
    <ConfigButton title="Settings">
      <GearWideConnected />
    </ConfigButton>
  );
}

export default SettingsButton;
