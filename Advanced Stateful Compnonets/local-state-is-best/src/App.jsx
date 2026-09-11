import { useState } from "react";
import { Counter } from "./Counter";
import { CounterReset } from "./CounterReset";
import { HistoryControls } from "./HistoryControls";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [count, setCount] = useLocalStorage("local-state-count", 0);
  const [step, setStep] = useState(1);
  const [past, setPast] = useState([]);
  const [future, setFuture] = useState([]);

  function changeCount(amount) {
    setCount((currentCount) => {
      setPast((history) => [...history, currentCount]);
      setFuture([]);
      return currentCount + amount * step;
    });
  }

  function reset() {
    setCount((currentCount) => {
      setPast((history) => [...history, currentCount]);
      setFuture([]);
      return 0;
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

  return (
    <>
      <Counter count={count} step={step} changeCount={changeCount} />
      <HistoryControls
        canUndo={past.length > 0}
        canRedo={future.length > 0}
        undo={undo}
        redo={redo}
      />
      <label>
        Step
        <input
          min="1"
          type="number"
          value={step}
          onChange={(event) => setStep(Math.max(1, Number(event.target.value)))}
        />
      </label>
      <CounterReset reset={reset} />
    </>
  );
}

export default App;
// Using state across different components can lead to increased complexity and tight coupling between components.
// This is because the state needs to be lifted to a common parent component, which can make the code harder to manage and debug.
// Additionally, passing state and functions as props through multiple levels of components can result in "prop drilling."

// Use cases where sharing state across components is ideal:
// 1. When components need to share a common state, such as a shopping cart in an e-commerce application.
// 2. When implementing global application state using tools like React Context or state management libraries (e.g., Redux, Zustand).
// 3. When parent and child components need to synchronize their behavior, such as a modal and its trigger button.

// Use cases where sharing state across components is not recommended:
// 1. When the state is only relevant to a single component. In such cases, local state should be used to keep the component self-contained.
// 2. When the state is passed through many intermediate components that do not use it, leading to unnecessary prop drilling.
// 3. When the state can be managed locally without impacting other parts of the application, reducing complexity and improving maintainability.
