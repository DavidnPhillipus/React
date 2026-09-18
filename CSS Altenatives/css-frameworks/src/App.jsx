import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4">Bootstrap React App</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Welcome!</h5>
          <p className="card-text">
            This is a simple React app styled with Bootstrap.
          </p>
          <button className="btn btn-success">Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
