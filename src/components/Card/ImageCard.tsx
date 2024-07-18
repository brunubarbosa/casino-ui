import React from "react";
import { Card } from "./";
import Image from "next/image";
import { imageCardWrapper } from "./style";

export const ImageCard = ({}) => {
  return (
    <Card active={false}>
      <div className={imageCardWrapper}>
        <Image
          src="/assets/thumbs/originals.png"
          width={150}
          height={200}
          alt="Originals Thumb"
        />
      </div>
    </Card>
  );
};
