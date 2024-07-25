"use client";

import React from "react";
import { activeButton, buttonStyle, cx, switcherContainer } from "./style";
import Image from "next/image";
import { Icon, IconName } from "../Icon";
import { token } from "@/styled-system/tokens";

interface SwitcherButtonProps {
  buttons: {
    label: string;
    icon: IconName;
    active: boolean;
    id: string;
  }[];
}

export const SwitcherButton = ({ buttons }: SwitcherButtonProps) => {
  return (
    <div className={switcherContainer}>
      {buttons.map((button) => (
        <div
          className={cx(button.active && activeButton, buttonStyle)}
          key={button.id}
        >
          <Icon
            width={20}
            height={20}
            name={button.icon}
            color={token("colors.low-contrast")}
          />
          <span>{button.label}</span>
        </div>
      ))}
    </div>
  );
};
