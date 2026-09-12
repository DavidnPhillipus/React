import React, { useRef, forwardRef } from "react";

/*
  Forwarding Refs in React

  - In React, refs are used to access DOM nodes or React elements created in the render method.
  - By default, refs cannot be passed to custom components directly.
  - React provides `React.forwardRef` to allow refs to be forwarded to child components.
  - This is useful when you want a parent component to directly interact with a child component's DOM node.

  Example below:
  - We create a custom Input component that forwards its ref to the underlying <input> element.
  - The parent App component uses this ref to focus the input when a button is clicked.
*/

// Import necessary modules

// Custom Input component that forwards its ref to the <input> element
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function App() {
  // Create a ref using useRef hook
  const inputRef = useRef(null);

  // Function to focus the input when button is clicked
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Pass the ref to the custom component */}
      <CustomInput ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={handleFocus} style={{ marginLeft: 10 }}>
        Focus Input
      </button>
    </div>
  );
}

export default App;
