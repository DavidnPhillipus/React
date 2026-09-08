import { Fragment, useState } from "react";
import React from "react";

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
    <>
      <button onClick={addItem}>addItem</button>
      <pre>
        {items.map((item) => {
          return <Fragment key={item.id}>{item.name}</Fragment>;
        })}
      </pre>
    </> //This are the fragments
    //But what if we wantesd to use the fragment as a wrapper with a key
    //In that case we can use the key prop in the fragment
    // <Fragment key={item.id}>
  );
}

export default App;
