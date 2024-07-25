import React from "react";
import { Card } from "./";
import Image from "next/image";
import { imageCardWrapper } from "./style";

interface ImageCardProps {
  url: string;
  alt: string;
}

export const ImageCard = ({ url, alt }: ImageCardProps) => {
  return (
    <Card active={false}>
      <div className={imageCardWrapper}>
        <Image src={url} width={165} height={200} alt={alt} />
      </div>
    </Card>
  );
};
