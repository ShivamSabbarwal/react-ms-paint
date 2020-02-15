import React, { Component, Fragment } from "react";

// Component Imports
import ColorPicker from "../src/components/ColorPicker";

// Image Imports
import pencil from "../src/images/pencil.svg";
import fill from "../src/images/fill.svg";
import picker from "../src/images/picker.svg";

// Styling Imports
import "./App.css";

const defaultColor = "black";
const defaultTool = "Pencil";

// const toolbarItems = [
//   { name: "Pencil", image: pencil },
//   { name: "Fill", image: fill },
//   { name: "Picker", image: picker }
// ];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: defaultColor,
      selectedItem: defaultTool
      // toolbarItems: toolbarItems
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
      <Fragment className="App">
        <header className="App-header">
          <ColorPicker />
        </header>
      </Fragment>
    );
  }
}
