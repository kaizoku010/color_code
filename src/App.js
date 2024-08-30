import React, { useState } from "react";
import "./ColorVisualizer.css";

const colors = {
  brand: {
    50: '#F6FEF6',// #F6FEF6
    100: '#E3FBE3',
    200: '#C7F7C7',
    300: '#c7f7c7' ,//green
    400: '#60a87f',
    500: '#66c18f',// f99d1c
    600: '#42845d',//darker green
    700: '#60a87f',//button outline
    800: '#02294F',
    900: '#02294F',
  },
  secondary: {
    50: "#F9F0FF",
    100: "#E9CEFD",
    200: "#D49CFC",
    300: "#B355F6",
    400: "#750AC2",
    500: "#6709AA",
    600: "#490679",
    700: "#3B0363",
    800: "#2F024F",
    900: "#23023B",
  },
  gray: {
    50: "#FBFCFE",
    100: "#EAF0F5",
    200: "#D6E2EB",
    300: "#BFCCD9",
    400: "#94A6B8",
    500: "#5B6B7C",
    600: "#4C5967",
    700: "#364049",
    800: "#131B20",
    900: "#090E10",
  },
  green: {
    50: "#F6FEF6",
    100: "#E3FBE3",
    200: "#C7F7C7",
    300: "#A1E8A1",
    400: "#51BC51",
    500: "#1F7A1F",
    600: "#136C13",
    700: "#0A470A",
    800: "#042F04",
    900: "#021D02",
  },
};

const ColorVisualizer = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (colorKey, colorValue) => {
    setSelectedColor({ key: colorKey, value: colorValue });
  };

  return (
    <div className="color-visualizer">
      {Object.keys(colors).map((paletteName) => (
        <div key={paletteName}>
          <h2>{paletteName}</h2>
          <div className="color-grid">
            {Object.entries(colors[paletteName]).map(([key, value]) => (
              <div
                key={key}
                className="color-block"
                style={{ backgroundColor: value }}
                onClick={() => handleClick(key, value)}
              >
                <span>{`${key}: ${value}`}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedColor && (
        <div
          className="selected-color"
          style={{ backgroundColor: selectedColor.value }}
        >
          <h3>Selected Color: {selectedColor.key}</h3>
          <p>{selectedColor.value}</p>
        </div>
      )}
    </div>
  );
};

export default ColorVisualizer;
