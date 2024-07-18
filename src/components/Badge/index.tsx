import React, { ReactNode } from "react";
import { badgeWrapper } from "./style";

interface BadgeProps {
  content: string;
  type: "success" | "error";
}
export const Badge = ({ content, type }: BadgeProps) => {
  return <div className={badgeWrapper({ visual: type })}>{content}</div>;
};
