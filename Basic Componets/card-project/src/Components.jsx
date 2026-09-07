import { useState } from "react";
import "./App.css";
import users from "./user.json";

function App() {
  return (
    <div className="card">
      <h1 className="name">{users.name}</h1>
      <div className="body">
        <div className="label">Age:</div>
        <div>{users.age}</div>
        <div className="label">Phone:</div>
        <div>{users.phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{users.address}</div>
      </div>
    </div>
  );
}

export default App;
