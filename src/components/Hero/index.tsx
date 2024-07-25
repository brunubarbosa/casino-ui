"use client";

import React from "react";
import {
  actionsWrapper,
  content,
  contentWrapper,
  imageWrapper,
  wrapper,
  highlightPrimary,
  socialWrapper,
  description,
  heading,
  mainButton,
} from "./style";
import { Button } from "../Button";
import Image from "next/image";

interface HeroProps {}
export const Hero = ({}: HeroProps) => {
  return (
    <div className={wrapper}>
      <div className={contentWrapper}>
        <div className={content}>
          <h1 className={heading}>
            Boas vindas ao <span className={highlightPrimary}>Pigmo</span>!
          </h1>
          <span className={description}>
            Jogue inteligente conosco. Crie sua conta ou entre agora para ganhar
            recompensas
          </span>
          <div className={actionsWrapper}>
            <Button
              variant="primary"
              size="md"
              onClick={() => {}}
              className={mainButton}
            >
              QUERO ME REGISTRAR
            </Button>
            <div className={socialWrapper}>
              <Button
                variant="outline"
                onClick={() => {}}
                icon="google"
                iconSize="5"
              />
              <Button
                variant="outline"
                onClick={() => {}}
                icon="metamask"
                iconSize="5"
              />
              <Button
                variant="outline"
                onClick={() => {}}
                icon="solana"
                iconSize="5"
              />
            </div>
          </div>
        </div>
        <div className={imageWrapper}>
          <Image
            src="/assets/hero.svg"
            alt="hero image"
            objectFit="cover"
            fill
          />
        </div>
      </div>
    </div>
  );
};
