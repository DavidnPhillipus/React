import { useState } from "react";
import useOnlineStatus from "./useOnlineStatus";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const isOnline = useOnlineStatus();
  const [name, setName] = useState("Name", "");
  const [age, setAge] = useState(0);

  return (
    <div>
      <h3>{isOnline ? "Online" : "Offline"}</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
    </div>
  );
}
