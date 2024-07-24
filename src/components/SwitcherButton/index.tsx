"use client";

import React from "react";
import { activeButton, buttonStyle, cx, switcherContainer } from "./style";
import Image from "next/image";
import { Icon } from "../Icon";

export const SwitcherButton = () => {
  return (
    //TODO: make it generic
    <div className={switcherContainer}>
      <div className={cx(activeButton, buttonStyle)}>
        <Icon width={20} height={20} name="spades" />
        <span> CASINO</span>
      </div>
      <div className={buttonStyle}>
        <Icon width={20} height={20} name="trophy" />
        <span>CASINO</span>
      </div>
      <div className={buttonStyle}>
        <Icon width={15} name="candles" />
        <span>CASINO</span>
      </div>
    </div>
  );
};
