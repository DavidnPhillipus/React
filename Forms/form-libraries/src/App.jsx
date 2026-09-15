import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // React form libraries are tools that simplify the process of handling forms in React applications.
  // They provide features like form validation, state management, and integration with APIs.
  // Here are three popular React form libraries:
  // 1. Formik: A lightweight library for building forms in React. It simplifies form state management and validation.
  // 2. React Hook Form: A performant library that uses React hooks for form state and validation.
  // 3. Redux Form: A library that integrates form state with Redux, useful for applications already using Redux.

  return (
    <>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>
    </>
  );
}

export default App;
