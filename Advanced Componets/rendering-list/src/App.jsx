import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  function addItem() {
    setItems((prevItems) => [
      ...prevItems,
      { id: crypto.randomUUID(), name: `Item ${prevItems.length + 1}` },
    ]);
  }

  return (
    <div>
      <button onClick={addItem}>addItem</button>
      <pre>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <input type="text" />
            </div>
          );
        })}
      </pre>
    </div>
  );
}

export default App;
