import { useContext } from "react";
import { ThemeContext } from "./App";

export function GrandChild() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          background: isDarkMode ? "#333" : "white",
          color: isDarkMode ? "white" : "#333",
          border: "none",
          padding: ".5em",
          borderRadius: ".25 em",
          cursor: "pointer",
        }}
      ></button>
    </>
  );
}
