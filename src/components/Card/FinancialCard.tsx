import React from "react";
import Image from "next/image";
import { Card } from "./index";
import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import { Badge } from "../Badge";
import {
  financialCardBody,
  financialCardFooter,
  financialCardFooterContent,
  financialCardHeader,
  financialCardWrapper,
  hstack,
} from "./style";
import { Icon } from "../Icon";

interface FinancialCardProps {
  type: "crypto" | "stock";
  name: string;
  price: string;
  volume: string;
  leverage?: string;
  percentageChange: number;
}

export const FinancialCard: React.FC<FinancialCardProps> = ({
  type,
  name,
  price,
  volume,
  leverage,
  percentageChange,
}) => {
  return (
    <Card active={false}>
      <Box className={financialCardWrapper}>
        <div className={financialCardHeader}>
          <div className={hstack({})}>
            <Image
              width={30}
              height={30}
              src="/assets/bitcoin.svg"
              alt="bitoin"
            />
            <div
              className={css({
                fontWeight: "bolder",
              })}
            >
              {name}
            </div>
          </div>

          <Badge type="success">
            <Icon name="rise" width={10} height={10} />
            <span>{percentageChange}%</span>
          </Badge>
        </div>
        <div className={financialCardBody}>
          <div>$ {price}</div>
        </div>
        <div className={financialCardFooter}>
          <div className={financialCardFooterContent}>
            <span>24 VOL</span>
            <span>${volume}M</span>
          </div>
          <div className={financialCardFooterContent}>
            <span>LEVERAGE</span>
            <span>{leverage}X</span>
          </div>
        </div>
      </Box>
    </Card>
  );
};
