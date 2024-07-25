"use client";

import React, { ReactNode } from "react";
import { buttonWrapper, cx } from "./style";
import { Icon, IconName } from "../Icon";
import { SizeToken, Token, token } from "@/styled-system/tokens";

type SocialIconType = "telegram" | "x" | "discord";

interface BaseButtonProps {
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "blue" | "dark";
  iconSize?: SizeToken;
  children?: string | ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonProps<V extends "primary" | "text" | "icon" | "outline" | "social"> =
  BaseButtonProps &
    (V extends "social"
      ? { variant: V; icon: SocialIconType }
      : { variant?: V; icon?: IconName });

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
  className,
  iconSize: _iconsize,
}: ButtonProps<V>) => {
  const iconSize = token(`sizes.${_iconsize}` as Token, "1rem");
  return (
    <button
      onClick={onClick}
      className={cx(
        className,
        buttonWrapper({
          visual: variant,
          size: size,
          shape: "rounded",
          color,
        })
      )}
      disabled={!!disabled}
    >
      {icon ? (
        <Icon name={icon} width={iconSize} height={iconSize} color="white" />
      ) : null}
      {children}
    </button>
  );
};
