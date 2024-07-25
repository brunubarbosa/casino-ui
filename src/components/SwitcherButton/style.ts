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
  borderWidth: 1,
  gap: 4,
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
  '& svg': {
    fill: 'white',
  }
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
      animation: `max-width`,
    },
  },
});
