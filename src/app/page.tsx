"use client";

import { styled } from "../../styled-system/jsx";
import { Carousel } from "../components/Carousel";
import { Icon } from "../components/Icon";
import { Card, FinancialCard, CategoryCard } from "../components/Card";
import { ImageCard } from "../components/Card/ImageCard";
import Image from "next/image";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <div>
      <Carousel
        title="esportes"
        icon="spades"
        subTitle={`TOTAL 24H VOLUME`}
        items={[
          <FinancialCard
            type="stock"
            name="BTC"
            price="150.25"
            volume="120"
            leverage="100"
            percentageChange={-1.56}
          />,
          <FinancialCard
            type="stock"
            name="BTC"
            price="150.25"
            volume="120"
            leverage="100"
            percentageChange={-1.56}
          />,
          <FinancialCard
            type="stock"
            name="BTC"
            price="150.25"
            volume="120"
            leverage="100"
            percentageChange={-1.56}
          />,
        ]}
      ></Carousel>
      <Carousel
        title="esportes"
        icon="spades"
        subTitle={`TOTAL 24H VOLUME`}
        items={[
          <ImageCard />,
          <ImageCard />,
          <ImageCard />,
          <ImageCard />,
          <ImageCard />,
          <ImageCard />,
          <ImageCard />,
          <ImageCard />,
          <ImageCard />,
        ]}
      ></Carousel>
      <Button onClick={() => {}} variant="text">
        Register
      </Button>
      <Button onClick={() => {}} variant="primary" size="sm">
        Register
      </Button>
      <Button onClick={() => {}} variant="primary" size="md">
        Register
      </Button>
      <Button onClick={() => {}} variant="primary" size="lg">
        Join Discord's largest community of players now!
      </Button>
      <Button onClick={() => {}} variant="outline" size="md">
        <Icon name="american-football" width={30} height={30} />
      </Button>
    </div>
  );
}
