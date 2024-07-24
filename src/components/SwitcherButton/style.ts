import {css,Styles } from '@/styled-system/css'
export {css, cx, } from '@/styled-system/css'



export const switcherContainer = css({
  display: "inline-flex",
  alignItems: "center",
  paddingX: 3,
  paddingY: 1,
  borderRadius: "md",
  fontSize: "sm",
  flexShrink: 0,
  border: 1,
  gap: 4
});

export const activeButtonProperties: Styles = {
  linearGradient: "96.45deg, #D80073 19.95%, #FF5A54 115.62%",
  fontWeight: 'bolder',
  fontSize: 'sm',
  padding: 2,
  borderRadius: 'md',
  cursor: 'pointer',
  '& span': {
    maxWidth: '100px',
    animation: `max-width`
  },
}
export const activeButton = css(activeButtonProperties)

export const buttonStyle = css({
  display: "flex",
  '& span': {
    transition: 'max-width .3s ease',
    maxWidth: 0,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'nowrap', 

  },
  _hover: {
    ...activeButtonProperties,
    '& span': {
      maxWidth: '100px',
      animation: `max-width`
    },
  },
});


export const inactiveButtonStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingY: 2,
  paddingX: 4,
  borderRadius: "3xl",
  background: "transparent",
  color: "#b3b3b3",
  fontSize: "md",
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "white",
  },
});