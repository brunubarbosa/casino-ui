"use client";

import { styled } from "../../styled-system/jsx";
import { Carousel } from "../components/Carousel";
import { Icon } from "../components/Icon";
import { Card, FinancialCard, CategoryCard } from "../components/Card";
import { ImageCard } from "../components/Card/ImageCard";
import Image from "next/image";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { mainWrapper } from "./style";
import { SwitcherButton } from "../components/SwitcherButton";

export default function Home() {
  return (
    <div>
      <Hero />
      <main className={mainWrapper}>
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
              percentageChange={1.56}
            />,
            <FinancialCard
              type="stock"
              name="BTC"
              price="150.25"
              volume="120"
              leverage="100"
              percentageChange={1.56}
            />,
            <FinancialCard
              type="stock"
              name="BTC"
              price="150.25"
              volume="120"
              leverage="100"
              percentageChange={1.56}
            />,
            <FinancialCard
              type="stock"
              name="BTC"
              price="150.25"
              volume="120"
              leverage="100"
              percentageChange={1.56}
            />,
            <FinancialCard
              type="stock"
              name="BTC"
              price="150.25"
              volume="120"
              leverage="100"
              percentageChange={1.56}
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
        <Carousel
          title="esportes"
          icon="spades"
          subTitle={`TOTAL 24H VOLUME`}
          items={[
            <CategoryCard icon="volleyball" label="Voleibol" />,
            <CategoryCard icon="volleyball" label="Voleibol" />,
            <CategoryCard icon="volleyball" label="Voleibol" />,
            <CategoryCard icon="volleyball" label="Voleibol" />,
            <CategoryCard icon="volleyball" label="Voleibol" />,
            <CategoryCard icon="volleyball" label="Voleibol" />,
            <CategoryCard icon="volleyball" label="Voleibol" />,
            <CategoryCard icon="volleyball" label="Voleibol" />,
          ]}
        ></Carousel>
      </main>
    </div>
  );
}
