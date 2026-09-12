import { useState } from "react";
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      {changeDogs ? (
        <>
          <span># of Dogs:</span> <Counter key="Dogs" />
        </>
      ) : (
        <>
          <span># of Cats:</span> <Counter key="Cats" />
        </>
      )}
      <br />
      <button onClick={() => setChangeDogs(!changeDogs)}>
        {changeDogs ? "Switch to Cats" : "Switch to Dogs"}
      </button>
    </div>
  );
}
