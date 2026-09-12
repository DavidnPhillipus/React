import { useMemo } from "react";
import { useState } from "react";
function Correct() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");

  const filteredItems = useMemo(() => {
    inputValue === "" ? items : items.filter((item) => item < inputValue);
  }, [inputValue, items]);

  return (
    <>
      <label htmlFor="lessThan">Show Less Than</label>
      <input
        type="number"
        id="lessThan"
        onChange={(e) => setInputValue(e.target.valueAsNumber)}
        value={inputValue}
      />
      <br />
      <br />
      <div>{items.join(" , ")}</div>
      <br />
      <button onClick={() => setItems((prev) => [...prev, 2.5])}>
        Add 2.5 To List
      </button>
    </>
  );
}

export default App;

/**
 * Correct Component
 *
 * This component demonstrates the correct approach to handling derived state in React.
 * Instead of storing derived state directly in the component's state, it uses the `useMemo` hook
 * to compute the derived state (`filteredItems`) based on the current state (`items` and `inputValue`).
 *
 * Why it's never good to use derived state:
 * - **Redundancy**: Storing derived state duplicates data that can already be computed from existing state.
 * - **Inconsistency**: If the source state changes but the derived state is not updated correctly, it can lead to bugs.
 * - **Performance**: Updating derived state unnecessarily can cause additional re-renders and degrade performance.
 * - **Complexity**: Managing derived state adds unnecessary complexity to the code, making it harder to maintain.
 *
 * Instead, derived state should be computed dynamically using tools like `useMemo` or inline calculations
 * to ensure consistency and simplicity.
 *
 * @component
 * @returns {JSX.Element} The rendered Correct component.
 */
