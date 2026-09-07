import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter></Counter>
    </>
  );
}

export default App;
