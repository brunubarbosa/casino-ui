import {css} from "@/styled-system/css";
export {hstack, stack} from '@/styled-system/patterns'


export const imageCardWrapper = css({
  overflow: "hidden",
  '& img': {
    rounded: "xl",
  }
})
export const categoryCardWrapper = css({
  fontWeight: "bolder",
  gap: '20px',
  fontSize: "sm",
  height: "150",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  shadow: "lg",
  linearGradient: 'var(--colors-neutral-100, #170D19)',
  rounded: "xl",
  flexDirection: "column",
  textTransform: "uppercase",
  borderWidth: 1,
  color: 'low-contrast',
  _hover: {
    color: "white",
    linearGradient: '129.59deg, #FF01B8 2.58%, #FF6865 95.56%',
    boxShadow: `0px 0px 62px 3px #35243D`,
    transition: "color .15s",
    willChange: "transform",

    _hover: {
      '& [class*="force-white-fill"]': {
        fill: "white",
      }
    },
  },
})

export const financialCardWrapper =  css({
  borderWidth: 1,
  rounded: "md",
  p: 3,
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
export const financialCardHeader =  css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})
export const financialCardBody =  css({
  borderYWidth: 1,
  paddingY: 2,
  fontSize: "xl",
  fontWeight: "bolder",
})
export const financialCardFooter =  css({
  color: "low-contrast",
  fontWeight: "bold",
  fontSize: "sm",
  paddingTop: 3,
})
export const financialCardFooterContent =  css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& span:last-child": {
    color: 'white'
  }
})
