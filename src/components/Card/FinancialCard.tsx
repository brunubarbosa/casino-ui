import React from "react";
import Image from "next/image";
import { Card } from "./index";
import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import { Badge } from "../Badge";
import {
  finantialCardBody,
  finantialCardFooter,
  finantialCardFooterContent,
  finantialCardHeader,
  finantialCardWrapper,
  hstack,
} from "./style";

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
      <Box className={finantialCardWrapper}>
        <div className={finantialCardHeader}>
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
          <Badge
            type="success"
            content={`${percentageChange > 0 ? "A" : "B"} ${percentageChange}%`}
          />
        </div>
        <div className={finantialCardBody}>
          <div>$ {price}</div>
        </div>
        <div className={finantialCardFooter}>
          <div className={finantialCardFooterContent}>
            <span>24 VOL</span>
            <span>${volume}M</span>
          </div>
          <div className={finantialCardFooterContent}>
            <span>LEVERAGE</span>
            <span>{leverage}X</span>
          </div>
        </div>
      </Box>
    </Card>
  );
};
