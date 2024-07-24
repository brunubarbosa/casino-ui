"use client";

import React, { ReactNode, useRef } from "react";
import Image from "next/image";
import { Icon, IconType } from "../Icon";
import {
  arrowWrapper,
  header,
  hstack,
  titleWrapper,
  css,
  subTitleWrapper,
  wrapper,
  slideWrapper,
} from "./style";
import { Button } from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

interface CarouselProps {
  items: ReactNode[];
  title: string;
  subTitle?: ReactNode | string;
  icon: IconType;
}

export const Carousel = ({ items, title, subTitle, icon }: CarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={hstack()}>
          <span className={titleWrapper}>
            <Icon width={20} height={20} name={icon} />
            {title}
          </span>
          <span className={subTitleWrapper}>{subTitle}</span>
        </div>
        <div className={arrowWrapper}>
          <Button
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            variant="icon"
            size="sm"
            icon="arrow-left"
          />
          <Button
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            variant="icon"
            size="sm"
            icon="arrow-right"
          />
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={slideWrapper}
        spaceBetween={10}
        breakpointsBase="container"
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
          650: {
            slidesPerView: 4,
          },
          850: {
            slidesPerView: 5,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
