import {css} from "@/styled-system/css";
export {hstack, stack} from '@/styled-system/patterns'

export const wrapper = css({
  width: 'full',
  height: '350px'
})

export const contentWrapper = css({
  width: 'full',
  height: 'full',
  overflow: 'hidden',
  position: 'relative',
})

export const content = css({
  px: 5,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'full',
  position: 'relative',
  zIndex: 50,
  maxWidth: '2xl',
  color: 'low-contrast',
  fontSize: 'sm',
  fontWeight: 'bolder',
  gap: 5,
  textAlign: 'center',

  "@/2xl": {
    textAlign: 'start',
    padding: '20',
    alignItems: 'start',
  },
})

export const heading = css({
  fontSize: '26',
  color: 'white',

  "@/5xl": {
    fontSize: '2.625rem',
  },
  "@/lg": {
    fontSize: '2xl',
  }
})
export const description = css({
  fontSize: 'md',
  maxWidth: '10/12',

})
export const highlightPrimary = css({
  color: 'primary'
})

export const actionsWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '8/12',
  maxWidth: '96',
  '@/7xl': {
    flexDirection: 'row',
    width: 'full',
  }
})
export const mainButton = css({
  flexGrow: 1,
})
export const socialWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  gap: 3
})

export const imageWrapper = css({
  position: "absolute",
  height: "100%",
  width: "100%",
  top: "0",
  right: "0",
  opacity: '0.05',
  "@/6xl": {
  opacity: 1,

  },
  "@/2xl": {
    right: "-20%",
    top: 0
  }
})
