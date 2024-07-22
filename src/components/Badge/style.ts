import { cva } from "@/styled-system/css";


export const badgeWrapper = cva({
  base: {
    display: "flex",
    rounded: "sm",
    fontSize: 'xm',
    fontWeight: "bold",
    p: "2px",
  },
  variants: {
    visual: {
      success: {
        borderWidth: 1,
        borderColor: "success",
        color: "success",
      },
      error: {
        borderWidth: 1,
        borderColor: "error",
        color: "error",
      },
    },
  },
})