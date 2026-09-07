import { useState } from "react";
import React from "react";

export function Component() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleMinus = () => {
    setAge((age) => {
      return age - 1;
    });
  };

  const handlePlus = () => {
    setAge((age) => {
      return age + 1;
    });
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <div>
        <button onClick={handleMinus}>-</button>
        {age}
        <button onClick={handlePlus}>+</button>
      </div>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </>
  );
}
