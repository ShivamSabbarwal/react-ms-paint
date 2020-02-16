import React, { Component } from "react";

// Component Imports
import ColorPicker from "./components/ColorPicker";
import Canvas from "./components/Canvas";

// Image Imports
import pencil from "./images/pencil.svg";
import fill from "./images/fill.svg";
import picker from "./images/picker.svg";

// Styling Imports
import "./App.css";

const defaultColor = "black";
const defaultTool = "Pencil";

const toolbarItems = [
  { name: "Pencil", image: pencil },
  { name: "Fill", image: fill },
  { name: "Picker", image: picker }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: defaultColor,
      selectedItem: defaultTool,
      toolbarItems: toolbarItems
    };

    this.changeColor = this.changeColor.bind(this);
    this.changeTool = this.changeTool.bind(this);
  }

  changeColor(event) {
    this.setState({ color: event.target.style.backgroundColor });
  }

  changeTool(event, tool) {
    this.setState({ selectedItem: tool });
  }

  render() {
    return (
      <div className="App">
        <Canvas
          items={this.state.toolbarItems}
          activeItem={this.state.selectedItem}
          handleClick={this.changeTool}
          color={this.state.color}
        />
        <ColorPicker />
      </div>
    );
  }
}
