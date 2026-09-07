import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    };

    return <h1 onClick={handleClick}>{this.state.count}</h1>;
  }
}
