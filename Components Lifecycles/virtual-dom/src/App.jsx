import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Child from "./Child.jsx";

function App() {
  const [count, setCount] = useState(0);

  console.log("Render App");

  return (
    <div>
      <button
        style={{ display: "block", marginBottom: "1rem" }}
        onClick={() => setCount((c) => c + 1)}
      >
        {count}
      </button>
      <Child />
    </div>
  );
}

export default App;

/*
  React uses a Virtual DOM to efficiently update the UI.
  Instead of directly changing the actual DOM when state changes,
  React creates a lightweight copy (Virtual DOM) and compares it
  to the previous version using a process called "reconciliation".

  If differences are found, React calculates the minimal number
  of real DOM changes needed and applies them in a batch for performance.

  In this component, when `name` or `age` is updated via setState,
  React re-renders only the parts of the UI that changed.
*/
