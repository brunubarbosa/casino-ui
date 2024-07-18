import React, { ReactNode } from "react";
import { Card } from "./";
import { css } from "@/styled-system/css";
import { Icon } from "../Icon";
import { categoryCardWrapper } from "./style";

interface CategoryCardProps {
  icon: ReactNode;
  name: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, name }) => {
  return (
    <Card active={false}>
      <div className={categoryCardWrapper}>
        <Icon name="volleyball" height={40} width={40} />
        <span>tenis de mesa</span>
      </div>
    </Card>
  );
};
