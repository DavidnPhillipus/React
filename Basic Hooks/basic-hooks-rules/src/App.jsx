/**
 * App Component
 *
 * This component demonstrates the use of React's `useState` and `useEffect` hooks.
 *
 * Rules of Hooks:
 * 1. Only call hooks at the top level. Do not call hooks inside loops, conditions, or nested functions.
 * 2. Only call hooks from React function components or custom hooks.
 *
 * Features:
 * - Maintains a `count` state using the `useState` hook.
 * - Updates the document title with the current count using the `useEffect` hook.
 *
 * @returns {JSX.Element} The rendered App component with increment and decrement buttons.
 */

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}

export default App;
