import React, { Component } from "react";

const Button = props => {
  return (
    <div
      className={"button " + (props.active ? "selected" : "")}
      onClick={e => props.handleClick(e, props.name)}
    >
      <i className={`fas fa-${props.icon} fa-lg`}></i>
    </div>
  );
};

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, name) {
    this.props.handleClick(event, name);
  }

  render() {
    const items = this.props.items.map(item => (
      <Button
        active={this.props.activeItem === item.name ? true : false}
        name={item.name}
        icon={item.icon}
        key={item.name}
        handleClick={this.handleClick}
      />
    ));

    return <div className="toolbar">{items}</div>;
  }
}

export default Toolbar;
