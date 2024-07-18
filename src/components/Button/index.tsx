import React, { ReactNode } from "react";
import { buttonWrapper } from "./style";
import { Icon, IconType } from "../Icon";

interface ButtonProps {
  variant?: "primary" | "text" | "icon" | "outline";
  size?: "sm" | "md" | "lg";
  children?: string | ReactNode;
  icon?: IconType;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ variant, size, children, icon }: ButtonProps) => {
  return (
    <button
      className={buttonWrapper({
        visual: variant,
        size: size,
        shape: "rounded",
      })}
    >
      {icon ? <Icon name={icon} width={8} height={15} /> : null}
      {children}
    </button>
  );
};
