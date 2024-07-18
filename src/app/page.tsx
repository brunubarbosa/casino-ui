import { styled } from "../../styled-system/jsx";
import { Carousel } from "../components/Carousel";
import { Icon } from "../components/Icon";
import { Card, FinancialCard, CategoryCard } from "../components/Card";
import { ImageCard } from "../components/Card/ImageCard";
import Image from "next/image";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <styled.div>
      <Carousel
        title="esportes"
        icon="spades"
        subTitle={`TOTAL 24H VOLUME`}
        items={
          <>
            <CategoryCard
              icon={<i className="icon-ping-pong" />}
              name="TÊNIS DE MESA"
            />
            <CategoryCard
              icon={<i className="icon-ping-pong" />}
              name="TÊNIS DE MESA"
            />
            <CategoryCard
              icon={<i className="icon-ping-pong" />}
              name="TÊNIS DE MESA"
            />
          </>
        }
      ></Carousel>
      <Carousel
        title="esportes"
        icon="spades"
        subTitle={`TOTAL 24H VOLUME`}
        items={
          <>
            <FinancialCard
              type="stock"
              name="BTC"
              price="150.25"
              volume="120"
              leverage="100"
              percentageChange={-1.56}
            />
            <FinancialCard
              type="stock"
              name="BTC"
              price="150.25"
              volume="120"
              leverage="100"
              percentageChange={-1.56}
            />
            <FinancialCard
              type="stock"
              name="BTC"
              price="150.25"
              volume="120"
              leverage="100"
              percentageChange={-1.56}
            />
          </>
        }
      ></Carousel>
      <Carousel
        title="esportes"
        icon="spades"
        subTitle={`TOTAL 24H VOLUME`}
        items={
          <>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </>
        }
      ></Carousel>
      <Button variant="text">Register</Button>
      <Button variant="primary" size="sm">
        Register
      </Button>
      <Button variant="primary" size="md">
        Register
      </Button>
      <Button variant="primary" size="lg">
        Join Discord's largest community of players now!
      </Button>
    </styled.div>
  );
}
