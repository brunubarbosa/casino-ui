import { cva } from "@/styled-system/css";


export const badgeWrapper = cva({
  base: {
    display: "flex",
    rounded: "sm",
    fontSize: 'xs',
    fontWeight: "bold",
    alignItems: "center",
    gap: 1,
    paddingX: "4px",
    paddingY: "2px",
    lineHeight: 1
  },
  variants: {
    visual: {
      success: {
        borderWidth: 1,
        border: "1px solid var(--colors-success)",
        color: "success",
        boxShadow: '0 0 4px var(--colors-success)',
      },
      error: {
        borderWidth: 1,
        borderColor: "error",
        color: "error",
        boxShadow: '0 0 4px var(--colors-error)',

      },
    },
  },
})