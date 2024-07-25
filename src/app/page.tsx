"use client";

import { Carousel } from "../components/Carousel";
import { Card, FinancialCard, CategoryCard } from "../components/Card";
import { ImageCard } from "../components/Card/ImageCard";
import { Hero } from "../components/Hero";
import { carouselDescription, descriptionAmount, mainWrapper } from "./style";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={mainWrapper}>
        <Carousel
          title="criptomoedas"
          icon="spade"
          subTitle={
            <p className={carouselDescription}>
              TOTAL 24H VOLUME:
              <span className={descriptionAmount}>$2.27B</span>
              <Button variant="primary" size="sm" onClick={() => {}}>
                TRADE
              </Button>
            </p>
          }
          items={[
            {
              item: (
                <FinancialCard
                  type="stock"
                  name="BTC"
                  price="150.25"
                  volume="120"
                  leverage="100"
                  percentageChange={1.56}
                />
              ),
              id: "jf8sa89fh83hrh43",
            },
            {
              item: (
                <FinancialCard
                  type="stock"
                  name="BTC"
                  price="150.25"
                  volume="120"
                  leverage="100"
                  percentageChange={-1.56}
                />
              ),
              id: "jf83r3h43",
            },
            {
              item: (
                <FinancialCard
                  type="stock"
                  name="BTC"
                  price="150.25"
                  volume="120"
                  leverage="100"
                  percentageChange={1.56}
                />
              ),
              id: "jf8sfaghrh43",
            },
            {
              item: (
                <FinancialCard
                  type="stock"
                  name="BTC"
                  price="150.25"
                  volume="120"
                  leverage="100"
                  percentageChange={1.56}
                />
              ),
              id: "jf8sar43d3rh43",
            },
            {
              item: (
                <FinancialCard
                  type="stock"
                  name="BTC"
                  price="150.25"
                  volume="120"
                  leverage="100"
                  percentageChange={1.56}
                />
              ),
              id: "jfe23e2drh43",
            },
            {
              item: (
                <FinancialCard
                  type="stock"
                  name="BTC"
                  price="150.25"
                  volume="120"
                  leverage="100"
                  percentageChange={-1.56}
                />
              ),
              id: "jf8sd3d23h5h43",
            },
            {
              item: (
                <FinancialCard
                  type="stock"
                  name="BTC"
                  price="150.25"
                  volume="120"
                  leverage="100"
                  percentageChange={-1.56}
                />
              ),
              id: "jf8scwcwxhrh43",
            },
            {
              item: (
                <FinancialCard
                  type="stock"
                  name="BTC"
                  price="150.25"
                  volume="120"
                  leverage="100"
                  percentageChange={-1.56}
                />
              ),
              id: "jf8sac3543h43",
            },
          ]}
        ></Carousel>
        <Carousel
          title="cassino"
          icon="spade"
          subTitle={`TOTAL 24H VOLUME`}
          items={[
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/slots.svg"
                  alt="Originals game"
                />
              ),
              id: "jf8sqc5qc4rh43",
            },
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/originals.png"
                  alt="Originals game"
                />
              ),
              id: "jf8cterwhrh43",
            },
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/game-shows.svg"
                  alt="Originals game"
                />
              ),
              id: "jf8sac64qh43",
            },
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/live-casino.svg"
                  alt="Originals game"
                />
              ),
              id: "jf8cqtreq4h43",
            },
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/table-games.svg"
                  alt="Originals game"
                />
              ),
              id: "jf8sa89c542h43",
            },
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/black-jack.svg"
                  alt="Originals game"
                />
              ),
              id: "jf8sc5c4hrh43",
            },
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/roulette.svg"
                  alt="Originals game"
                />
              ),
              id: "jf8sactqwxwh43",
            },
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/slots.svg"
                  alt="Originals game"
                />
              ),
              id: "jf8s5c435ch43",
            },
            {
              item: (
                <ImageCard
                  url="/assets/thumbs/originals.png"
                  alt="Originals game"
                />
              ),
              id: "jf8awcrsaxh43",
            },
          ]}
        ></Carousel>
        <Carousel
          title="esportes"
          icon="spade"
          subTitle={`TOTAL 24H VOLUME`}
          items={[
            {
              item: <CategoryCard icon="ping-pong" label="Tênis" />,
              id: "c3636c453yh",
            },
            {
              item: <CategoryCard icon="volleyball" label="Voleibol" />,
              id: "jf8safFWCT43",
            },
            {
              item: <CategoryCard icon="boxe" label="Boxe" />,
              id: "jf8sJYTRJKYAFh43",
            },
            {
              item: <CategoryCard icon="golf" label="golf" />,
              id: "jf8vhda43",
            },
            {
              item: <CategoryCard icon="mma" label="MMA" />,
              id: "jf8vastgahrh43",
            },
            {
              item: <CategoryCard icon="snooker" label="snooker" />,
              id: "jf8vjhtykyhrh43",
            },
          ]}
        ></Carousel>
      </div>
    </div>
  );
}
