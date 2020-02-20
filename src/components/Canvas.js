import React, { Component, Fragment } from "react";

import Toolbox from "./Toolbar";

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
    this.canvasRef = React.createRef();
    this.canvasOverlayRef = React.createRef();
    this.ctx = null;
    this.overlayCtx = null;
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
  }

  componentDidMount() {
    let canvasRef = this.canvasRef.current;
    let canvasOverlayRef = this.canvasOverlayRef.current;
    let canvasRect = canvasRef.getBoundingClientRect();

    this.ctx = canvasRef.getContext("2d");
    this.ctxOverlay = canvasOverlayRef.getContext("2d");
    this.setState({ offsetX: canvasRect.left, offsetY: canvasRect.top });
  }

  handleMouseDown(e) {
    let ctx = this.ctx;
    let ctxOverlay = this.ctxOverlay;
    let activeItem = this.props.activeItem;

    this.setState({ isDrawing: true });
    ctx.beginPath();
    ctx.strokeStyle = this.props.color;
    ctx.lineWidth = 1;
    ctx.lineJoin = ctx.lineCap = "round";

    if (
      activeItem === "Pencil"
      // || activeItem === "Brush"
    ) {
      ctx.moveTo(
        e.clientX - this.state.offsetX,
        e.clientY - this.state.offsetY
      );
      // if (activeItem === "Brush") ctx.lineWidth = 5;
    }
    // else if (activeItem === "Line" || activeItem === "Rectangle") {
    //   ctxOverlay.strokeStyle = this.props.color;
    //   ctxOverlay.lineWidth = 1;
    //   ctxOverlay.lineJoin = ctx.lineCap = "round";
    //   this.setState({
    //     startX: e.clientX - this.state.offsetX,
    //     startY: e.clientY - this.state.offsetY
    //   });
    // }
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

  handleMouseUp(e) {
    let ctx = this.ctx;
    ctx.closePath();
    this.setState({ isDrawing: false });
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
            <div class="col">
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
            <div class="col">
              <input
                className="input"
                type="number"
                min="10"
                value={this.state.width}
                onChange={this.handleWidthChange}
                required
              />
              <label for="canvas-width">Width</label>
              <span class="underline"></span>
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
            <canvas
              className="canvas-overlay"
              width={`${this.state.width}px`}
              height={`${this.state.height}px`}
              ref={this.canvasOverlayRef}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Canvas;
