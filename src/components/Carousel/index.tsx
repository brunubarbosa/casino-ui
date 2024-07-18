import React, { ReactNode } from "react";
import Image from "next/image";
import { Icon, IconType } from "../Icon";
import { arrowWrapper, header, hstack, titleWrapper } from "./style";
import { Button } from "../Button";

interface CarouselProps {
  items: ReactNode;
  title: string;
  subTitle?: ReactNode | string;
  icon: IconType;
}

export const Carousel = ({ items, title, subTitle, icon }: CarouselProps) => {
  return (
    <div>
      <div className={header}>
        <div className={hstack()}>
          <span className={titleWrapper}>
            <Icon width={20} height={20} name={icon} />
            {title}
          </span>
          <span>{subTitle}</span>
        </div>
        <div className={arrowWrapper}>
          <Button
            onClick={() => {}}
            variant="icon"
            size="sm"
            icon="arrow-left"
          />
          <Button
            onClick={() => {}}
            variant="icon"
            size="sm"
            icon="arrow-right"
          />
        </div>
      </div>
      <ul className={hstack()}>{items}</ul>
    </div>
  );
};
