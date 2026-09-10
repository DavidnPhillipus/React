import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label>
        Name:
        <input
          type="text"
          {...useInputValue(name)}
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <br />
      {/* <button onClick={() => setIsDarkMode((d = !d))}>Toggle Dark Mode</button> */}
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
}

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}

export default App;
