import { useState, useEffect, use } from "react";
import { DisplayString } from "./DisplayString";

export default function FunctionalComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(age - 1)}>-</button>
      <br />
      {age}
      <button onClick={() => setAge(age + 1)}>+</button>
      <br />
      <br />
      <DisplayString name={name} age={age} />
      <br />
    </div>
  );
}
