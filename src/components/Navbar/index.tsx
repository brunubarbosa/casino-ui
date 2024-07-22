import React from "react";
import {
  css,
  navbarWrapper,
  logoStyles,
  leftWrapper,
  rightWrapper,
} from "./style";
import { Button } from "../Button";
import Image from "next/image";
import { Icon } from "../Icon";

export const Navbar = () => {
  return (
    <nav className={navbarWrapper}>
      <div className={rightWrapper}>
        <Icon name="menu-left" width={25} />

        <Image
          src="/assets/gradient-logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <div className={leftWrapper}>
        <Button onClick={() => {}} variant="text">
          LOGIN
        </Button>
        <Button onClick={() => {}} variant="primary" size="md">
          REGISTER
        </Button>
      </div>
    </nav>
  );
};
