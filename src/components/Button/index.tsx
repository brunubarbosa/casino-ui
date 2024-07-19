"use client";

import React, { ReactNode } from "react";
import { buttonWrapper } from "./style";
import { Icon, IconType } from "../Icon";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

interface ButtonProps {
  variant?: "primary" | "text" | "icon" | "outline";
  size?: "sm" | "md" | "lg";
  children?: string | ReactNode;
  icon?: IconType;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  variant,
  size,
  children,
  icon,
  onClick,
}: ButtonProps) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={onClick}
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
