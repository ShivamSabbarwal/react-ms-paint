import React, { Component } from "react";

const colors = [
  "#000000",
  "#FFFFFF",
  "#BBBBBB",
  "#787878",
  "#FF0E00",
  "#790300",
  "#FAFF08",
  "#757A01",
  "#00FF0B",
  "#007902",
  "#00FEFF",
  "#007778",
  "#3400FE",
  "#0A0078",
  "#FF00FE",
  "#7B0077",
  "#FBFF7A",
  "#767A38",
  "#00FF7B",
  "#003637",
  "#76FEFF",
  "#286FFE",
  "#8270FE",
  "#083178",
  "#FF0677",
  "#4C00FE",
  "#FF7D36",
  "#783B00"
];

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
    this.state = {
      canvasHeight: 800,
      canvasWidth: 600
    };
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
        {/* <SelectedColor color={this.props.selectedColor} /> */}
        <div className="color-panel">{colorItems}</div>
      </div>
    );
  }
}

export default ColorPicker;
