import React, { Component } from "react";
import { SketchPicker } from "react-color";

const palette = [
  "#000000",
  "#787878",
  "#790300",
  "#757A01",
  "#007902",
  "#007778",
  "#0A0078",
  "#7B0077",
  "#767A38",
  "#003637",
  "#286FFE",
  "#083178",
  "#4C00FE",
  "#783B00",
  "#FFFFFF",
  "#BBBBBB",
  "#FF0E00",
  "#FAFF08",
  "#00FF0B",
  "#00FEFF",
  "#3400FE",
  "#FF00FE",
  "#FBFF7A",
  "#00FF7B",
  "#76FEFF",
  "#8270FE",
  "#FF0677",
  "#FF7D36"
];

class ColorPicker extends Component {
  render() {
    return <SketchPicker presetColors={palette} width="360px" />;
  }
}

export default ColorPicker;