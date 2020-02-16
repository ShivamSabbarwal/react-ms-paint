import React from "react";
// import ReactDOM from "react-dom";

class SizeObserver extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.name;
  }

  componentDidMount() {
    this.intervalUpdate = setInterval(this.updatePosition, 50);
  }

  componentWillUnmount() {
    clearInterval(this.intervalUpdate);
  }

  updatePosition = () => {
    this.forceUpdate();
  };

  getBound() {
    const component = document.getElementById(this.id);
    if (!component) {
      return {};
    }
    const rect = component.getBoundingClientRect();
    // console.log('window.scrollY', window.scrollY)
    return {
      left: rect.left,
      top: rect.top + window.scrollY,
      width: rect.width || rect.right - rect.left,
      height: rect.height || rect.bottom - rect.top
    };
  }

  render() {
    const bound = this.getBound();
    return (
      <React.Fragment>
        {/* {ReactDOM.createPortal(this.mountNode)} */}
        {this.props.children(this.id)}
      </React.Fragment>
    );
  }
}

export default SizeObserver;
