"use client";

import React, { useState, ReactNode } from "react";
import {
  profileData,
  profileDataWrapper,
  sidebarHeader,
  sidebarWrapper,
  css,
  cx,
  collapsibleContent,
  collapsibleContainer,
  linkStyles,
  sidebarContainer,
  bottomContentWrapper,
  contactCardWrapper,
  settingsWrapper,
  subLink,
  cq,
  colapseItem,
} from "./style";
import Image from "next/image";
import { Icon, IconName } from "../Icon";
import { SwitcherButton } from "../SwitcherButton";
import { Badge } from "../Badge";
import Link from "next/link";
import { useSidebarStore } from "@/src/store/sidebar";
import { token } from "@/styled-system/tokens";

interface SidebarItemProps {
  label: string;
  children: ReactNode;
}
const SidebarItem = ({ label, children }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx(collapsibleContainer, isOpen && "expanded")}>
      <div
        className={cx(colapseItem, linkStyles, isOpen && "expanded")}
        onClick={toggleCollapse}
      >
        <span>{label}</span>
        <Icon
          name="arrow-down"
          width={15}
          height={15}
          color={token("colors.low-contrast")}
        />
      </div>
      <ul className={cx(collapsibleContent, isOpen && "expanded")}>
        {children}
      </ul>
    </div>
  );
};

interface SubLinkProps {
  value: string;
  href: string;
  icon: IconName;
}
interface SidebarProps {
  menuItems: {
    label: string;
    subLink: SubLinkProps[];
    id: string;
  }[];
}

export const Sidebar = ({ menuItems }: SidebarProps) => {
  const { isOpen } = useSidebarStore();
  return (
    <aside
      className={cx(
        cq({ name: "sidebar" }),
        sidebarWrapper,
        isOpen ? "sidebar-open" : ""
      )}
    >
      <div className={sidebarHeader}>
        <SwitcherButton />
        <div className={profileDataWrapper}>
          <Image
            src="/assets/profile-placeholder.svg"
            width={40}
            height={40}
            alt="profile picture"
          />
          <div className={profileData}>
            <h2>Pigmo Coin</h2>
            <span>$0.0000</span>
          </div>
          <Badge type="success" content="2.26%" icon="rise"></Badge>
        </div>
      </div>
      <div className={sidebarContainer}>
        {menuItems.map((item) => (
          <>
            <SidebarItem label={item.label}>
              {item.subLink.map(({ value, href, icon }) => (
                <li className={cx(subLink, linkStyles)}>
                  <Icon
                    name={icon}
                    width={15}
                    height={15}
                    color={token("colors.low-contrast")}
                  />
                  <Link href={href}>{value}</Link>
                </li>
              ))}
            </SidebarItem>
          </>
        ))}
      </div>

      <div className={bottomContentWrapper}>
        <button className={contactCardWrapper}>
          <div>
            <h2>Fale conosco</h2>
            <span>Se precisar de ajuda nós estamos aqui</span>
          </div>
          <div>
            <Image src="/assets/dice.png" width={55} height={60} alt="dice" />
          </div>
        </button>
        <div className={settingsWrapper}>
          <span>Idioma</span>
          <Image
            src="/assets/brazilian-flag.svg"
            width={28}
            height={20}
            alt="dice"
          />
        </div>
      </div>
    </aside>
  );
};
