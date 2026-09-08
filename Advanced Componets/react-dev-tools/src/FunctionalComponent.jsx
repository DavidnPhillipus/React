import { useState, useEffect, use } from "react";
import { DisplayString } from "./DisplayString";

export default function FunctionalComponent({ faveNum }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = name;
  }, [name]);

  // let jsx;
  // if (faveNum !== null) {
  //   jsx = `My favorite number is ${faveNum}`;
  // }//This code is not executed because faveNum is null
  //But theres is a buch cleaner way to do this with a ternary operator

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
      {faveNum !== null && `My favorite number is ${faveNum}`}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {faveNum === null ? "No faveNum" : `My favorite number is ${faveNum}`}
      <DisplayString name={name} age={age} />
      <br />
    </div>
  );
}
