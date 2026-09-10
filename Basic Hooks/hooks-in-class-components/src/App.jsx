import { useState } from "react";

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    inputRef.current.focus();
  }

  render() {
    return (
      <>
        <label>
          Name:
          <input
            type="text"
            ref={this.inputRef}
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </label>
      </>
    );
  }
}

export default App;
