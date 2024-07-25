"use client";

import React from "react";
import {
  bottomFooter,
  contactWrapper,
  linksWrapper,
  mainBottomLine,
  mainFooter,
  mainTopLine,
  rightsContent,
  wrapper,
} from "./style";
import { Button } from "../Button";
import Link from "next/link";
import { Icon } from "../Icon";

interface FooterProps {}
export const Footer = ({}: FooterProps) => {
  return (
    <footer className={wrapper}>
      <div className={mainFooter}>
        <section className={mainTopLine}>
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
                <li>
                  <Link href="">Telegram</Link>
                </li>
                <li>
                  <Link href="">Discord</Link>
                </li>
                <li>
                  <Link href="">Zealy</Link>
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
            <span>
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
            iconSize="10"
          >
            <span>
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
            <span>
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
