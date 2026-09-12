import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useCounterHistory(initialValue = 0) {
  const [count, setCount] = useLocalStorage("local-state-count", initialValue);
  const [past, setPast] = useState([]);
  const [future, setFuture] = useState([]);

  function updateCount(nextValue) {
    setCount((currentCount) => {
      const resolvedValue =
        typeof nextValue === "function" ? nextValue(currentCount) : nextValue;
      setPast((history) => [...history, currentCount]);
      setFuture([]);
      return resolvedValue;
    });
  }

  function undo() {
    const previousCount = past.at(-1);
    if (previousCount === undefined) return;
    setPast((history) => history.slice(0, -1));
    setFuture((history) => [count, ...history]);
    setCount(previousCount);
  }

  function redo() {
    const nextCount = future[0];
    if (nextCount === undefined) return;
    setFuture((history) => history.slice(1));
    setPast((history) => [...history, count]);
    setCount(nextCount);
  }

  return {
    count,
    future,
    past,
    redo,
    undo,
    updateCount,
  };
}
