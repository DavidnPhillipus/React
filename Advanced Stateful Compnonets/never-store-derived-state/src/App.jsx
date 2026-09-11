import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [filteredItems, setFilteredItems] = useState(items);

  function updateFilteredItems() {
    if (e.target.value === "") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item < e.target.valueAsNumber));
    }
  }

  return (
    <>
      <label htmlFor="lessThan">Show Less Than</label>
      <input type="number" id="lessThan" onChange={updateFilteredItems} />
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
