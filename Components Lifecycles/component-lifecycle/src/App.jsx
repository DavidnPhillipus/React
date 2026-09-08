import { useState } from "react";
import React from "react";

/*
  === React Mounting Phase ===
  - This component is a functional component.
  - When it is first rendered, React "mounts" it:
      1. Calls this function (Component).
      2. Initializes state using useState.
      3. Builds a Virtual DOM based on the JSX returned.
      4. Inserts the resulting elements into the real DOM.
*/

/*
  === Unmounting Phase ===
  - Happens when the component is removed from the DOM (e.g., navigating away or conditional rendering).
  - Functional components can handle cleanup using `useEffect`.
  - Useful for:
      • Clearing timers or intervals
      • Removing event listeners
      • Canceling network requests
      • Cleaning up subscriptions
*/

/*
  === Virtual DOM Explanation ===
  - React doesn't directly update the real DOM on every state change.
  - Instead, it creates a lightweight copy of the real DOM (called the Virtual DOM).
  - When `setName` or `setAge` is called, React:
      1. Creates a new Virtual DOM snapshot.
      2. Compares it to the previous version (diffing).
      3. Calculates the minimal changes.
      4. Efficiently updates only what's needed in the real DOM.
*/

export function Component() {
  // Initializes `name` state on component mount
  const [name, setName] = useState("");

  // Initializes `age` state on component mount
  const [age, setAge] = useState(0);

  // Called when user types in the input; updates name state
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Decreases age state by 1
  const handleMinus = () => {
    setAge((age) => age - 1);
  };

  // Increases age state by 1
  const handlePlus = () => {
    setAge((age) => age + 1);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <div>
        <button onClick={handleMinus}>-</button>
        {age}
        <button onClick={handlePlus}>+</button>
      </div>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </>
  );
}
