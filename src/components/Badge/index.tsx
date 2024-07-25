import React, { ReactNode } from "react";
import { badgeWrapper } from "./style";
import { Icon, IconName } from "../Icon";
import { token } from "@/styled-system/tokens";

interface BadgeProps {
  content: string;
  icon?: IconName;
  type: "success" | "error";
}
export const Badge = ({ content, type, icon }: BadgeProps) => {
  return (
    <div className={badgeWrapper({ visual: type })}>
      {icon ? (
        <Icon
          name={icon}
          color={token(`colors.${type}`)}
          width={10}
          height={10}
        />
      ) : null}
      <span>{content}</span>
    </div>
  );
};
