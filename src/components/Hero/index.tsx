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
  heroImage,
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
              aria-label="sign up"
            >
              QUERO ME REGISTRAR
            </Button>
            <div className={socialWrapper}>
              <Button
                variant="outline"
                onClick={() => {}}
                icon="google"
                iconSize="5"
                aria-label="google"
              />
              <Button
                variant="outline"
                onClick={() => {}}
                icon="metamask"
                iconSize="5"
                aria-label="metamask"
              />
              <Button
                variant="outline"
                onClick={() => {}}
                icon="solana"
                iconSize="5"
                aria-label="solana"
              />
            </div>
          </div>
        </div>
        <div className={imageWrapper}>
          <Image
            className={heroImage}
            src="/assets/hero.svg"
            alt="hero image"
            fill
          />
        </div>
      </div>
    </div>
  );
};
