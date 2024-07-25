"use client";

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
import { useSidebarStore } from "@/src/store/sidebar";

export const Navbar = () => {
  const { toggle: toggleSidebar } = useSidebarStore();
  return (
    <nav className={navbarWrapper}>
      <div className={rightWrapper}>
        {/* TODO: ass "as" button */}

        <button onClick={() => toggleSidebar()}>
          <Icon name="menu-hamburger" width={15} />
        </button>
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
