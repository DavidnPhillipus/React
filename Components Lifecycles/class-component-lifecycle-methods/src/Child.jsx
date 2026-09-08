import React from "react";
import { useState, useEffect } from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidMount() {
    console.log("Child component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      console.log("Name changed from", prevState.name, "to", this.state.name);
      document.addEventListener("click", this.handleClick);
    }
    if (prevState.age !== this.state.age) {
      console.log("Age changed from", prevState.age, "to", this.state.age);
    }
  }

  componentWillUnmount() {
    console.log("Child component will unmount");
    document.removeEventListener("click", this.handleClick);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button onClick={() => setAge((a) => a - 1)}>-</button>
        {age}
        <button onClick={() => setAge((a) => a + 1)}>+</button>
        <br />
        <br />
        My name is {name} and I am {age} years old.
      </div>
    );
  }
}
