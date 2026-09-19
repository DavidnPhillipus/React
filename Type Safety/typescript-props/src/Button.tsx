import { ComponentProps } from "react";

type ButtonProps = {
  outline?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

export function Button({ outline, ...props }: ButtonProps) {
  return (
    <button
      style={{ border: outline ? " 1px solid blue" : undefined }}
      {...props}
    ></button>
  );
}
