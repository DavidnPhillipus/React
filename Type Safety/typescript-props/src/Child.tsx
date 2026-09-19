import { ReactNode } from "react";

type ChildProps = {
  name: string;
  children?: React.ReactNode;
  // children?: React.ReactNode; // This is optional, so it can be omitted when using the component
};

export function Child({ name, children }: ChildProps) {
  return { name, children };
}

// export function Child({ name }: {name : string}
// const Child: React.FC<ChildProps> = ({ name }) => {
