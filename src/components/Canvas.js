import React, { Component, Fragment } from "react";

import Toolbox from "./Toolbar";
import { FloodFill } from "./FloodFill";

const colorToRBG = color => {
  if (color[0] === "#") {
    // hex notation
    color = color.replace("#", "");
    const bigint = parseInt(color, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r: r, g: g, b: b };
  } else if (color.indexOf("rgb(") === 0) {
    // already in rgba notation
    color = color
      .replace("rgba(", "")
      .replace(" ", "")
      .replace(")", "")
      .split(",");
    return { r: color[0], g: color[1], b: color[2] };
  } else {
    console.error("warning: can't convert color to rgba: " + color);
    return { r: 0, g: 0, b: 0, a: 0 };
  }
};

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false,
      offsetX: 0,
      offsetY: 0,
      startX: 0,
      startY: 0,
      width: 750,
      height: 400
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);

    this.canvasRef = React.createRef();
    this.ctx = null;
  }

  componentDidMount() {
    const canvasRef = this.canvasRef.current;
    const canvasRect = canvasRef.getBoundingClientRect();

    this.ctx = canvasRef.getContext("2d");
    this.setState({ offsetX: canvasRect.left, offsetY: canvasRect.top });
  }

  handleMouseUp(e) {
    let ctx = this.ctx;
    ctx.closePath();
    this.setState({ isDrawing: false });
  }

  handleMouseDown(e) {
    let ctx = this.ctx;
    let activeItem = this.props.activeItem;

    this.setState({ isDrawing: true });
    ctx.beginPath();
    ctx.strokeStyle = this.props.color;
    ctx.lineWidth = 1;
    ctx.lineJoin = ctx.lineCap = "round";


    if (activeItem === "Pencil") {
      ctx.moveTo(
        e.clientX - this.state.offsetX,
        e.clientY - this.state.offsetY
      );
    } else if (activeItem === "Fill") {
      FloodFill(
        ctx,
        e.clientX - this.state.offsetX,
        e.clientY - this.state.offsetY,
        colorToRBG(this.props.color)
      );
    }
  }

  handleMouseMove(e) {
    let ctx = this.ctx;

    if (this.state.isDrawing) {
      if (this.props.activeItem === "Pencil") {
        ctx.lineTo(
          e.clientX - this.state.offsetX,
          e.clientY - this.state.offsetY
        );
        ctx.stroke();
      }
    }
  }

  handleHeightChange(event) {
    this.setState({ height: event.target.value });
  }

  handleWidthChange(event) {
    this.setState({ width: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <form>
          <div className="row">
            <div className="col">
              <input
                className="input"
                type="number"
                min="10"
                value={this.state.height}
                onChange={this.handleHeightChange}
                required
              />
              <label>Height</label>
            </div>
            <div className="col">
              <input
                className="input"
                type="number"
                min="10"
                value={this.state.width}
                onChange={this.handleWidthChange}
                required
              />
              <label>Width</label>
            </div>
          </div>
        </form>
        <div className="container">
          <Toolbox
            items={this.props.items}
            activeItem={this.props.activeItem}
            handleClick={this.props.handleClick}
          />
          <div className="canvas">
            <canvas
              className="canvas-actual"
              width={`${this.state.width}px`}
              height={`${this.state.height}px`}
              ref={this.canvasRef}
              onMouseDown={this.handleMouseDown}
              onMouseMove={this.handleMouseMove}
              onMouseUp={this.handleMouseUp}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Canvas;
