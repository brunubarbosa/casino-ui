"use client";

import React, { ReactNode } from "react";
import { buttonWrapper } from "./style";
import { Icon, IconType } from "../Icon";

type SocialIconType = "telegram" | "x" | "discord";

interface BaseButtonProps {
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  //todo: rename colors
  color?: "primary" | "blue" | "black";
  children?: string | ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonProps<V extends "primary" | "text" | "icon" | "outline" | "social"> =
  BaseButtonProps &
    (V extends "social"
      ? { variant: V; icon: SocialIconType }
      : { variant?: V; icon?: IconType });

export const Button = <
  V extends "primary" | "text" | "icon" | "outline" | "social",
>({
  variant,
  size,
  children,
  icon,
  onClick,
  disabled,
  color,
}: ButtonProps<V>) => {
  const isSocialButton = variant === "social";
  const iconSize = {
    width: isSocialButton ? 30 : 8,
    height: isSocialButton ? 30 : 15,
  };
  return (
    <button
      onClick={onClick}
      className={buttonWrapper({
        visual: variant,
        size: size,
        shape: "rounded",
        color,
      })}
      disabled={!!disabled}
    >
      {icon ? <Icon name={icon} {...iconSize} /> : null}
      {children}
    </button>
  );
};
