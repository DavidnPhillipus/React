import React from "react";

/*
Theory: Capture Event Listeners in React

In the browser's event system, events propagate in two phases:
1. Capture Phase (Trickling Down): The event travels from the root of the DOM tree down to the target element.
2. Bubble Phase (Bubbling Up): The event then bubbles up from the target element back to the root.

By default, React event handlers listen during the bubbling phase. However, you can listen during the capture phase by adding the `Capture` suffix to the event prop (e.g., `onClickCapture`).

This is useful when you want to intercept an event before it reaches its target.

Example:
*/

function App() {
  // Handler for the capture phase
  const handleDivClickCapture = () => {
    console.log("Div clicked (capture phase)");
  };

  // Handler for the bubble phase
  const handleDivClick = () => {
    console.log("Div clicked (bubble phase)");
  };

  // Handler for the button
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div
      onClickCapture={handleDivClickCapture} // Capture phase handler
      onClick={handleDivClick} // Bubble phase handler
      style={{ padding: 40, border: "2px solid blue" }}
    >
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default App;

/*
Try clicking the button and observe the console:
1. "Div clicked (capture phase)" logs first (capture phase).
2. "Button clicked" logs next (button's own handler).
3. "Div clicked (bubble phase)" logs last (bubble phase).

This demonstrates how capture and bubble phases work in React event handling.
*/
