import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setName] = useState("Kyle");
  const [age, setAge] = useState(25);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
