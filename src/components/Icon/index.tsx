import React from "react";
import Image from "next/image";

import Spade from "@/public/assets/icons/spade.svg";
import Seven from "@/public/assets/icons/7.svg";
import Volleyball from "@/public/assets/icons/volleyball.svg";
import ArrowLeft from "@/public/assets/icons/arrow-left.svg";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import ArrowDown from "@/public/assets/icons/arrow-down.svg";
import AmericanFootball from "@/public/assets/icons/american-football.svg";
import telegram from "@/public/assets/icons/telegram.svg";
import X from "@/public/assets/icons/x.svg";
import Discord from "@/public/assets/icons/discord.svg";
import Message from "@/public/assets/icons/message.svg";
import Google from "@/public/assets/icons/google.svg";
import Metamask from "@/public/assets/icons/metamask.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Rise from "@/public/assets/icons/rise.svg";
import Trophy from "@/public/assets/icons/trophy.svg";
import Candles from "@/public/assets/icons/candles.svg";
import Snooker from "@/public/assets/icons/snooker.svg";
import PingPong from "@/public/assets/icons/ping-pong.svg";
import Golf from "@/public/assets/icons/golf.svg";
import Boxe from "@/public/assets/icons/boxe.svg";
import Mma from "@/public/assets/icons/mma.svg";
import MenuHamburger from "@/public/assets/icons/menu-hamburger.svg";

const ICONS = {
  "7": Seven,
  volleyball: Volleyball,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-down": ArrowDown,
  spade: Spade,
  "american-football": AmericanFootball,
  telegram: telegram,
  x: X,
  discord: Discord,
  message: Message,
  google: Google,
  metamask: Metamask,
  solana: Solana,
  rise: Rise,
  trophy: Trophy,
  candles: Candles,
  "menu-hamburger": MenuHamburger,
  snooker: Snooker,
  "ping-pong": PingPong,
  golf: Golf,
  boxe: Boxe,
  mma: Mma,
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps {
  width: number | string;
  height: number | string;
  name: IconName;
  color: string;
}
export const Icon = ({ width, height, name, color }: IconProps) => {
  const IconComponent = ICONS[name];
  return <IconComponent width={width} height={height} fill={color} />;
};
