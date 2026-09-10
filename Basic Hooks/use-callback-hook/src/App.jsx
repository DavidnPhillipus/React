import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const printName = useCallback(() => {
    console.log(`Name: ${name}`);
  }, [name]);
  // useCallback is used to memoize the function so that it doesn't get recreated on every render
  // This is useful when passing the function as a prop to child components
  // or when using it in useEffect to avoid unnecessary re-renders
  // In this case, we are using it to avoid re-creating the function on every render
  // and to ensure that the function has the latest value of name
  // Previously, without useCallback, the printName function was recreated on every render
  // This caused the useEffect to re-run even when only the age state was updated
  // By using useCallback, we ensure that the function is only recreated when the name changes

  useEffect(() => {
    console.log("useEffect called");
    printName();
  }, [printName]);

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
    </>
  );
}

export default App;
