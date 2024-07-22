import React, { ReactNode } from "react";
import { badgeWrapper } from "./style";

interface BadgeProps {
  children: ReactNode;
  type: "success" | "error";
}
export const Badge = ({ children, type }: BadgeProps) => {
  return <div className={badgeWrapper({ visual: type })}>{children}</div>;
};
