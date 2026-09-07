import React from "react";

/**
 * Lesson: Imperative vs. declarative programming in JavaScript and React
 *
 * Imperative code explains HOW to do something, step by step. For example,
 * the DOM example manually finds an element, creates a node, and appends it.
 *
 * Declarative code explains WHAT the result should be. React receives state
 * and describes the UI that should be rendered; React handles DOM updates.
 */
function ImperativeExample() {
	const addMessage = () => {
		const message = document.createElement("p");
		message.textContent = "Added imperatively";
		document.getElementById("imperative-output").appendChild(message);
	};

	return (
		<section>
			<h2>Imperative JavaScript</h2>
			<p>Tell the browser each operation it must perform.</p>
			<button type="button" onClick={addMessage}>
				Add message
			</button>
			<div id="imperative-output" />
		</section>
	);
}

function DeclarativeExample() {
	const [messages, setMessages] = React.useState([]);

	return (
		<section>
			<h2>Declarative React</h2>
			<p>Describe the UI for the current state; React updates the DOM.</p>
			<button
				type="button"
				onClick={() => setMessages([...messages, "Added declaratively"])}
			>
				Add message
			</button>
			{messages.map((message, index) => (
				<p key={`${message}-${index}`}>{message}</p>
			))}
		</section>
	);
}

export default function ImperativeVsDeclarative() {
	return (
		<main>
			<h1>Imperative vs. Declarative</h1>
			<p>
				Imperative programming focuses on the steps. Declarative programming
				focuses on the desired result.
			</p>

			<h2>JavaScript examples</h2>
			<pre>{`// Imperative: describe the steps
const doubled = [];
for (const number of [1, 2, 3]) doubled.push(number * 2);

// Declarative: describe the transformation
const doubled = [1, 2, 3].map((number) => number * 2);`}</pre>

			<ImperativeExample />
			<DeclarativeExample />
		</main>
	);
}
