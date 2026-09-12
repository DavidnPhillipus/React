import { useLoaderData } from "react-router";

export function TeamMember() {
  const member = useLoaderData();

  return <h1>{member.name}</h1>;
}
