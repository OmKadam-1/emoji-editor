import React from "react";
import "./colorbutton.css";

function ColorButtons({ color, setColor }) {
  return (
    <button
      className="colorBtn"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    ></button>
  );
}

export default ColorButtons;