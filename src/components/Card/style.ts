import {css} from "@/styled-system/css";
export {hstack, stack} from '@/styled-system/patterns'


export const imageCardWrapper = css({
  rounded: "xl",
  overflow: "hidden",
})
export const categoryCardWrapper = css({
  fontWeight: "bolder",
  gap: '20px',
  fontSize: "sm",
  width: "180",
  height: "150",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  shadow: "lg",
  linearGradient: 'var(--colors-neutral-100, #170D19)',
  rounded: "xl",
  flexDirection: "column",
  textTransform: "uppercase",
  border: "1px",
  color: 'low-contrast',
  _hover: {
    color: "white",
    linearGradient: '129.59deg, #FF01B8 2.58%, #FF6865 95.56%',
    boxShadow: `0px 0px 62px 3px #35243D`,
    transition: "color .15s",
    willChange: "transform",
  },
})

export const finantialCardWrapper =  css({
  border: "1px",
  rounded: "md",
  p: "12px",
  width: "180px",
  linearGradient: '128.58deg, #00000000 63.84%, #cc95d726 96.69%',
  _hover: {
    linearGradient: '129deg, #0000 63.84%, #ff00b833 96.69%',
    translate: "auto",
    translateY: "-2%",
    cursor: "pointer",
    transition: "background 1s",
    willChange: "transform",
  },
})
export const finantialCardHeader =  css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})
export const finantialCardBody =  css({
  borderY: "1px solid",
  paddingY: "8px",
  fontSize: "xl",
  fontWeight: "bolder",
})
export const finantialCardFooter =  css({
  color: "low-contrast",
  fontWeight: "bold",
  fontSize: "sm",
  paddingTop: "10px",
})
export const finantialCardFooterContent =  css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& span:last-child": {
    color: 'white'
  }
})
