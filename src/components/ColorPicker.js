import React, { Component } from "react";

const colors = [
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

const SelectedColor = props => {
  return (
    <div
      className="color-selected"
      style={{
        backgroundColor: props.color
      }}
    />
  );
};

const Color = props => {
  return (
    <div
      className="color"
      style={{
        backgroundColor: props.color
      }}
      onClick={props.handleClick}
    />
  );
};

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleClick(event);
  }

  render() {
    const colorItems = colors.map(color => (
      <Color color={color} key={color} handleClick={this.handleClick} />
    ));

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <SelectedColor color={this.props.selectedColor} />
        <div className="color-panel">{colorItems}</div>
      </div>
    );
  }
}

export default ColorPicker;
