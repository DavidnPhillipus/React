import React from "react";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h1 onClick={incrementCount}>{count}</h1>
    </>
  );
}
