import React, { useState } from "react";
import './style.css'

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomGenerator = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomGenerator(hex.length)];
    }

    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const [r, g, b] = [
      randomGenerator(256),
      randomGenerator(256),
      randomGenerator(256),
    ];
    setColor(`rgb(${r},${g},${b})`);
  };
  return (
    <div style={{ background: color, width: "100vw", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Create Hex color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Creater RGB Color</button>
        <button
          onClick={ 
            
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: "50%",
          color: "white",
          fontSize: "70px",
        }}
      >
        {color}
      </div>
    </div>
  );
}
