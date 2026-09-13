import React, { useRef, useCallback } from "react";

/**
 * --- Callback Refs in React: A Comprehensive Guide ---
 *
 * ## What is a Ref in React?
 * - A ref (reference) is a way to access a DOM node or a React element created in the render method.
 * - The most common way is using useRef or React.createRef.
 *
 * ## What is a Callback Ref?
 * - Instead of passing a ref object to the `ref` prop, you can pass a function (callback ref).
 * - React will call this function with the DOM node when the component mounts, and with `null` when it unmounts.
 *
 * ## Why use Callback Refs?
 * - More control: You can run logic when the node mounts/unmounts.
 * - Dynamic assignment: You can conditionally assign refs or perform side effects.
 * - Useful for integrating with third-party libraries or managing focus/animations.
 *
 * ## Why use useCallback with Callback Refs?
 * - If you define the callback inline, it will be a new function on every render, causing React to call it repeatedly.
 * - useCallback memoizes the function, so it stays the same between renders unless dependencies change.
 * - This prevents unnecessary ref updates and improves performance.
 *
 * ## When to use Callback Refs over useRef?
 * - When you need to perform an action immediately when the ref is set (e.g., focus, measure, or integrate with a library).
 * - When you need to dynamically assign refs or handle multiple refs in a loop.
 * - For most simple cases, useRef is sufficient.
 */

// Example: Focusing an input on mount using a callback ref
function App() {
  // Create a ref to store the input DOM node
  const inputRef = useRef(null);

  /**
   * Callback ref function.
   * - Receives the DOM node as `node` when the input mounts.
   * - Receives `null` when the input unmounts.
   * - We use useCallback to memoize the function, so it doesn't change on every render.
   */
  const setInputRef = useCallback((node) => {
    if (node) {
      // The input is mounted: focus it
      node.focus();
    }
    // Store the node in a ref for later use (optional)
    inputRef.current = node;
  }, []);

  return (
    <div>
      {/* Assign the callback ref to the input */}
      <input ref={setInputRef} placeholder="I will be focused on mount" />
      {/* You can now use inputRef.current elsewhere if needed */}
    </div>
  );
}

export default App;

/**
 * --- Summary ---
 * - Callback refs give you more control than useRef for certain scenarios.
 * - useCallback ensures the callback ref is stable and doesn't cause unnecessary updates.
 * - Use callback refs when you need to perform actions as soon as a DOM node is available.
 */
