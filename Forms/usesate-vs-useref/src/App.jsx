/**
 * App Component
 *
 * This component demonstrates the use of `useRef` and `useState` for handling form inputs in React.
 *
 * Notes on `useState` vs `useRef` in forms:
 * - `useState`:
 *   - Tracks the value of the input field in the component's state.
 *   - Useful when you need to re-render the component on input changes or perform validations in real-time.
 *   - Example: Uncomment the `useState` code to see how the input value is managed via state.
 *
 * - `useRef`:
 *   - Provides a reference to the DOM element without triggering re-renders.
 *   - Useful for accessing the current value of the input field directly, especially when you don't need to update the UI on every change.
 *   - Example: The `nameRef` is used here to access the input value without managing it in the component's state.
 *
 * @returns {JSX.Element} The rendered form component.
 */
import { useState } from "react";

function App() {
  // const [name, setName] = useState("");
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") return;

    alert(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" ref={nameRef} />

      {/* <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <br />
      <br />
      <button>Alert Name</button>
    </form>
  );
}

export default App;
