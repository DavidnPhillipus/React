import React from "react";
import { useParams } from "react-router-dom";
import teamMembers from "../teamMembers.json";

export function TeamMember({ name }) {
  const { memberId } = useParams();
  const member = teamMembers.find((member) => member.id === TeamMemberId);
  return (
    <>
      <h1>Team Member-{name}</h1>
    </>
  );
}
