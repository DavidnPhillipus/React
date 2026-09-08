import { useState } from "react";
import { useEffect } from "react";
import React from "react";

export function Component() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  cost[(innerWidth, setWidth)] = useState(window.innerWidth);
  //This is a hook that allows you to perform side effects in your function components.

  useEffect(() => {
    console.log("Age changed to " + age);
  }, [age]); //This can also have multiple dependencies like [age, name]
  //This will run when the component mounts and when the age changes
  //If you want to run it only when the component mounts, you can pass an empty array []

  useEffect(() => {
    doucument.title = name;
  }, [name]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []); //This will run when the component mounts and when the window resizes

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []); //This will run when the component unmounts
  //This is a cleanup function that will run when the component unmounts
  //This is useful for cleaning up any side effects that were created in the component

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
      console.log("Cleanup function called");
    };
  }, [name]); //This will run when the component mounts and when the name changes
  //This is useful for cleaning up any side effects that were created in the component
  //This will run when the component unmounts

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
      {width}
    </>
  );
}
