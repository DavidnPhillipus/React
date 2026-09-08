import { useState } from "react";

export default function Child() {
  const [name, setName] = useState("");

  console.log("Render Child");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <p>My name is {name}</p>
    </div>
  );
}
