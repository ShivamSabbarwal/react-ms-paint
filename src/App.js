import React, { Component, Fragment } from "react";

// Component Imports
import MenuBar from "../src/components/menu-bar";
import Content from "../src/components/content";
import ColorPanel from "../src/components/color-panel";

// Image Imports
import pencil from "../src/images/pencil.svg";
import line from "../src/images/line.svg";
import brush from "../src/images/brush.svg";
import fill from "../src/images/fill.svg";
import rectangle from "../src/images/rectangle.svg";
import text from "../src/images/text.svg";
import circle from "../src/images/circle.svg";
import erase from "../src/images/erase.svg";
import picker from "../src/images/picker.svg";

// Styling Imports
import "./App.css";

const defaultColor = "black";
const defaultTool = "Pencil";

const toolbarItems = [
  { name: "Pencil", image: pencil },
  { name: "Line", image: line },
  { name: "Brush", image: brush },
  { name: "Fill", image: fill },
  { name: "Text", image: text },
  { name: "Rectangle", image: rectangle },
  { name: "Circle", image: circle },
  { name: "Erase", image: erase },
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
      <Fragment className="App">
        <header className="App-header">
          <MenuBar />
          <Content
            items={this.state.toolbarItems}
            activeItem={this.state.selectedItem}
            handleClick={this.changeTool}
            color={this.state.color}
          />
          <ColorPanel
            selectedColor={this.state.color}
            handleClick={this.changeColor}
          />
        </header>
      </Fragment>
    );
  }
}
