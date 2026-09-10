import { useState, useRef } from "react";

/**
 * App Component
 *
 * This component demonstrates the usage of the `useRef` hook in React.
 * The `useRef` hook is used to create a mutable reference object that persists
 * across renders. It can be used to store a value that does not trigger a re-render
 * when updated, or to directly access and manipulate DOM elements.
 *
 * In this example:
 * - `kyleRef` is a reference object initialized with the value "Kyle".
 * - The `Change Ref` button updates the `current` property of `kyleRef` with a random value.
 * - The `Log Kyle` button logs the current value of `kyleRef` to the console.
 *
 * Use Cases of `useRef`:
 * 1. Accessing and manipulating DOM elements directly (e.g., focusing an input field).
 * 2. Storing mutable values that do not cause re-renders (e.g., a counter or a flag).
 * 3. Keeping a reference to a previous value or state across renders.
 * 4. Integrating with third-party libraries that require direct DOM manipulation.
 */
function App() {
  const [name, setName] = useState("");
  const kyleRef = useRef("Kyle");

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => (kyleRef.current = Math.random())}>
          Change Ref
        </button>
        <button onClick={() => console.log(kyleRef.current)}>Log Kyle</button>
      </label>
    </>
  );
}

export default App;
