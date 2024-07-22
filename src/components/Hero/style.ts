import {css} from "@/styled-system/css";
export {hstack, stack} from '@/styled-system/patterns'

export const wrapper = css({
  width: 'full',
  height: '350px'
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
  maxWidth: 'xl',
  color: 'low-contrast',
  fontSize: 'sm',
  fontWeight: 'bolder',
  gap: 5,
  textAlign: 'center',
  md: {
  padding: '20',

  },

  '& span': {
    maxWidth: '10/12',
  },
  '& h1': {
    fontSize: '2xl',
    color: 'white',
  }
})

export const highlightPrimary = css({
  color: 'primary'
})

export const actionsWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  gap: 2,
  width: '8/12',
  md: {
    flexDirection: 'row',
  width: 'full',

  }
})
export const socialWrapper = css({
  display: 'flex',
  width: 'full',
  justifyContent: 'center',
  gap: 3
})

export const imageWrapper = css({
  position: "absolute",
  height: "100%",
  width: "100%",
  top: "0",
  md: {
    right: "-20%",
    top: 0
  }
})
export const contentWrapper = css({
  width: 'full',
  height: 'full',
  overflow: 'hidden',
  position: 'relative',
  '& img': {
    right: 0,
    height: 'full',
    width: 'full',
    opacity: '0.05',
    lg: {
    opacity: 1,
    }
  }
})