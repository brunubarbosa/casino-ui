import React, { ReactNode } from "react";
import { Card } from "./";
import { css } from "@/styled-system/css";
import { Icon, IconName } from "../Icon";
import { categoryCardWrapper } from "./style";

interface CategoryCardProps {
  icon: IconName;
  label: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, label }) => {
  return (
    <Card active={false}>
      <div className={categoryCardWrapper}>
        <Icon
          name={icon}
          height={40}
          width={40}
          color="linear-gradient(180deg, #FF6864 0%, #E90083 100%)"
        />
        <span>{label}</span>
      </div>
    </Card>
  );
};
