// Using props in JSX
import React from "react";

function Card({ title, description, image, category }) {
	return (
		<article className="card">
			<img src={image} alt={title} className="card-image" />
			<div className="card-content">
				<p className="card-category">{category}</p>
				<h2>{title}</h2>
				<p>{description}</p>
				<button type="button">Learn more</button>
			</div>
		</article>
	);
}

export default function UsingProps() {
	const courses = [
		{
			title: "React Basics",
			description: "Learn how to build reusable interfaces with React.",
			category: "Frontend Development",
			image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
		},
		{
			title: "JavaScript Essentials",
			description: "Practice the core JavaScript skills used in modern apps.",
			category: "Programming",
			image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600",
		},
	];

	return (
		<main>
			<h1>Courses</h1>
			<p>Props let a parent component pass data to a child component.</p>

			<section className="card-list">
				{courses.map((course) => (
					<Card key={course.title} {...course} />
				))}
			</section>
		</main>
	);
}

