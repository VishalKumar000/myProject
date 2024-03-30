//@ts-nocheck
import React from "react";
import { useCustomization } from "../Contexts/Customization";

const Configurator = () => {
  const { color, setColor } = useCustomization();
  return (
    <div className="fixed right-20 text-white bottom-24">
      <div>Configurator</div>
      <div>Lid Color</div>
      <label htmlFor="colorPicker" className="pr-5">
        Choose a color:
      </label>
      <input
        type="color"
        id="colorPicker"
        name="colorPicker"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Configurator;
