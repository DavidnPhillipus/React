import React from "react";
// import { useState } from "react";
import { Counter } from "./Counter";

function App() {
  // // const values = useState();
  // // const name = values(0);
  // // const setName = values[1];

  // // The code up performs the same function as the folowing

  // const [name, setName] = useState("It will get much easir");

  // function slowGetter() {
  //   // Really slow
  //   console.log("I am so excited");
  //   return "Backend next week ";
  // }
  // // const [name, setName] = useState(slowGetter());
  // // Imagine slowGetter() is a really slow function and every time we rerender we have to run this  code again
  // // This is gonna slow down my component
  // // const [name, setName] = useState(() =>{
  // /// comsole.log("I am so excited");
  // // return "Devops next month ";
  // // });
  // // This is a better way to fix it because now ot will ony be running once
  // function handleClick() {
  //   setName("It will just be me , code and music");
  // }

  return (
    <div>
      <Counter />
      {/* <h1 onClick={handleClick}>{name}</h1>; */}
    </div>
  );
}

export default App;
