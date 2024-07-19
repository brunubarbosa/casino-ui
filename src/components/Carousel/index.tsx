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
} from "./style";
import { Button } from "../Button";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
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
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 3,
          },
          750: {
            slidesPerView: 4,
          },
          900: {
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
