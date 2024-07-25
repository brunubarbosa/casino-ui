"use client";

import React, { ReactNode, useRef } from "react";
import Image from "next/image";
import { Icon, IconName } from "../Icon";
import { token } from "@/styled-system/tokens";

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
  icon: IconName;
}

export const Carousel = ({ items, title, subTitle, icon }: CarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={hstack()}>
          <span className={titleWrapper}>
            <Icon
              width={20}
              height={20}
              name={icon}
              color={token("colors.primary")}
            />
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
            iconSize="3"
          />
          <Button
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            variant="icon"
            size="sm"
            icon="arrow-right"
            iconSize="3"
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
            slidesPerView: 2,
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
          1000: {
            slidesPerView: 6,
          },
          1100: {
            slidesPerView: 7,
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
