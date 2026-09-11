import React from "react";
import { ThemeContext } from "./App";

export class GrandChild extends Reac.Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode, toggleTheme } = this.context;

    return (
      <ThemeContext.Consumer>
        {({ isDarkMode, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{
              background: isDarkMode ? "#333" : "white",
              color: isDarkMode ? "white" : "#333",
              border: "none",
              padding: ".5em",
              borderRadius: ".25em",
              cursor: "pointer",
            }}
          ></button>
        )}
      </ThemeContext.Consumer>
    );
  }
}
