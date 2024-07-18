import React from "react";
import Image from "next/image";

const ICONS = [
  "7",
  "volleyball",
  "arrow-left",
  "arrow-right",
  "menu-left",
  "spades",
  "american-football",
] as const;

export type IconType = (typeof ICONS)[number];

interface IconProps {
  width?: number;
  height?: number;
  name: IconType;
}
export const Icon = ({ width = 15, height = 15, name }: IconProps) => {
  return (
    <Image
      src={`/assets/icons/${name}.svg`}
      width={width}
      height={height}
      alt={`${name} icon`}
    />
  );
};
