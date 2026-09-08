import React from "react";
import { DisplayString } from "./DisplayString";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidUpdate() {
    document.title = this.state.name;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button onClick={() => this.setState({ age: this.state.age - 1 })}>
          -
        </button>
        <br />
        {this.state.age}
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          +
        </button>
        <br />
        <br />
        <DisplayString name={this.state.name} age={this.state.age} />
        <br />
      </div>
    );
  }
}
