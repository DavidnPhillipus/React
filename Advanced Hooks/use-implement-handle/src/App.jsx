import Input from "./Input";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef();

  return (
    <>
      <button onClick={() => inputRef.current.focus()}> Focus Input</button>
      <Input ref={inputRef} />
    </>
  );
}
