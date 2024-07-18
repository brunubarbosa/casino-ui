import React, { ReactNode } from "react";
import { css } from "@/styled-system/css";
export { CategoryCard } from "./CategoryCard";
export { FinancialCard } from "./FinancialCard";

interface CardProps {
  children: ReactNode;
  active: boolean;
}

export const Card = ({ children, active, ...props }: CardProps) => {
  return (
    <div
      className={css({
        _hover: {
          translate: "auto",
          translateY: "-2%",
          cursor: "pointer",
        },
        transition: "all .3s",
        willChange: "transform",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
