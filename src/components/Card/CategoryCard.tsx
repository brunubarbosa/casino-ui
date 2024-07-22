import React, { ReactNode } from "react";
import { Card } from "./";
import { css } from "@/styled-system/css";
import { Icon, IconType } from "../Icon";
import { categoryCardWrapper } from "./style";

interface CategoryCardProps {
  icon: IconType;
  label: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, label }) => {
  return (
    <Card active={false}>
      <div className={categoryCardWrapper}>
        <Icon name={icon} height={40} width={40} />
        <span>{label}</span>
      </div>
    </Card>
  );
};
