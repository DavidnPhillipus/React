import Reat from "react";

function App() {
  const learner = "David";
  const topics = ["Elements", "Expressions", "Components"];

  return (
    <main className="large" id="largeDiv">
      <h1>JSX Basics</h1>
      <p>Hello, {learner}!</p>

      <h2>What is JSX?</h2>
      <p>JSX lets you write HTML-like markup inside JavaScript.</p>

      <h2>Key ideas</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>

      <h2>How JSX differs from HTML</h2>
      <p>
        JSX uses <code>className</code> instead of HTML's <code>class</code>,
        JavaScript expressions inside curly braces, and camelCase event
        handlers such as <code>onClick</code>.
      </p>
      {/* JSX also requires every tag to be closed. */}
      <img
        src="https://via.placeholder.com/120"
        alt="A JSX example"
        className="jsx-image"
      />

      <button type="button" onClick={() => alert("JSX is working!")}>
        Try JSX
      </button>
    </main>
  );
}
