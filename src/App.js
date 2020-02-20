import React, { Component } from "react";

import Content from "./components/Canvas";
import ColorPanel from "./components/ColorPicker";

const defaultColor = "black";
const defaultTool = "Pencil";

const toolbarItems = [
  { name: "Pencil", icon: "pencil-alt" },
  { name: "Fill", icon: "fill-drip" }
];

class App extends Component {
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
      <React.Fragment>
        <Content
          items={this.state.toolbarItems}
          activeItem={this.state.selectedItem}
          handleClick={this.changeTool}
          color={this.state.color}
          canvasHeight={this.state.canvasHeight}
          canvasWidth={this.state.canvasWidth}
        />

        <ColorPanel
          selectedColor={this.state.color}
          handleClick={this.changeColor}
        />
      </React.Fragment>
    );
  }
}

export default App;
