"use client";

import React from "react";
import { activeButton, buttonStyle, cx, switcherContainer } from "./style";
import Image from "next/image";
import { Icon } from "../Icon";
import { token } from "@/styled-system/tokens";

export const SwitcherButton = () => {
  return (
    //TODO: make it generic
    <div className={switcherContainer}>
      <div className={cx(activeButton, buttonStyle)}>
        <Icon
          width={20}
          height={20}
          name="spade"
          color={token("colors.low-contrast")}
        />
        <span> CASINO</span>
      </div>
      <div className={buttonStyle}>
        <Icon
          width={20}
          height={20}
          name="trophy"
          color={token("colors.low-contrast")}
        />
        <span>CASINO</span>
      </div>
      <div className={buttonStyle}>
        <Icon
          width={15}
          height={15}
          name="candles"
          color={token("colors.low-contrast")}
        />
        <span>CASINO</span>
      </div>
    </div>
  );
};
