import React, { ReactNode } from "react";
import { buttonWrapper } from "./style";
interface ButtonProps {
  variant?: "primary" | "text";
  size?: "sm" | "md" | "lg";
  children: string | ReactNode;
}

export const Button = ({ variant, size, children }: ButtonProps) => {
  return (
    <button
      className={buttonWrapper({
        visual: variant,
        size: size,
        shape: "rounded",
      })}
    >
      {children}
    </button>
  );
};
