import { Link, useLoaderData } from "react-router-dom";
import React from "react";

export function TeamNav() {
  // Always ensure teamMember is an array to avoid runtime errors
  const teamMember = useLoaderData() || [];

  return (
    <nav>
      <ul>
        {teamMember.map((member) => (
          <li key={member.id}>
            <Link to={member.id.toString()}>Team-{member.name}</Link>
          </li>
        ))}
        <li>
          <Link to="new">New Member</Link>
        </li>
      </ul>
    </nav>
  );
}

/*
Pseudo-code / Explanation:

- Import React, Link, and useLoaderData from their respective libraries.
- Define the TeamNav component as a function.
- Retrieve data for the current route using useLoaderData; default to an empty array if no data is returned.
- Render a <nav> element containing a <ul> list.
- For each team member in the array, render a <li> with a Link to their specific route, using their id and name.
- Add an extra <li> with a Link to the "new" route for creating a new team member.
- Export the TeamNav component for use in other parts of the application.
- This component expects each team member object to have at least an id and name property.
- The Link component from react-router-dom enables client-side navigation without full page reloads.
*/
