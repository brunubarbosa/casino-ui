"use client";

import React from "react";
import {
  bottomFooter,
  contactWrapper,
  lastSpacedWord,
  leftContent,
  linksWrapper,
  mainBottomLine,
  mainFooter,
  mainTopLine,
  pigNose,
  rightsContent,
  spacedText,
  spacedTextWrapper,
  wrapper,
  cq,
  cx,
  socialButtonText,
} from "./style";
import { Button } from "../Button";
import Link from "next/link";
import { Icon } from "../Icon";
import Image from "next/image";
import { token } from "@/styled-system/tokens";
import PigNose from "@/public/assets/pig-nose.svg";

interface FooterProps {}
export const Footer = ({}: FooterProps) => {
  return (
    <footer className={cx(cq({ name: "footer" }), wrapper)}>
      <div className={mainFooter}>
        <section className={mainTopLine}>
          <div className={leftContent}>
            <Image
              src="/assets/long-logo.svg"
              width={150}
              height={200}
              alt="logo"
            />
            <div className={spacedTextWrapper}>
              <PigNose
                className={pigNose}
                width={38}
                height={38}
                fill={token("colors.primary")}
              />
              <p className={spacedText}>
                BEYOND
                <span className={lastSpacedWord}> LUCK</span>
              </p>
              <PigNose
                className={pigNose}
                width={38}
                height={38}
                fill={token("colors.primary")}
              />
            </div>
          </div>
          <div className={linksWrapper}>
            <div>
              <h2>PLATFORM</h2>
              <ul>
                <li>
                  <Link href="">About</Link>
                </li>
                <li>
                  <Link href="">Support</Link>
                </li>
                <li>
                  <Link href="">Provably Fair</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>POLICY</h2>
              <ul>
                <li>
                  <Link href="">Terms of Service</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="">License</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>COMMUNITY</h2>
              <ul>
                <li>
                  <Link href="">Twitter</Link>
                </li>
                <li>
                  <Link href="">Instagram</Link>
                </li>
                <li>
                  <Link href="">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={mainBottomLine}>
          <Button
            onClick={() => {}}
            variant="social"
            icon="discord"
            size="lg"
            color="primary"
            iconSize="10"
          >
            <span className={socialButtonText}>
              Join <strong>Discord's largest community </strong>
              of players now!
            </span>
          </Button>
          <Button
            onClick={() => {}}
            variant="social"
            icon="telegram"
            size="lg"
            color="blue"
            iconSize="9"
          >
            <span className={socialButtonText}>
              Pigmo is also on Telegram.
              <strong> Discover more now</strong>
            </span>
          </Button>
          <Button
            onClick={() => {}}
            variant="social"
            icon="x"
            size="lg"
            color="black"
            iconSize="10"
          >
            <span className={socialButtonText}>
              Follow us on X and keep up
              <strong> everything about us</strong>
            </span>
          </Button>
        </section>
      </div>
      <div className={bottomFooter}>
        <div>
          <span className={rightsContent}>@2024 Pigmo </span>
          <span className={rightsContent}>
            - All rights reserved. Pigmo is licensed and authorized, operating
            under the Game Service Provider Master License.
          </span>
        </div>
        <div className={contactWrapper}>
          <Icon name="message" color="none" height={18} width={18} />
          <span>CONTACT US</span>
        </div>
      </div>
    </footer>
  );
};
