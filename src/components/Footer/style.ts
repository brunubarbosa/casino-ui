import { css, cx } from "@/styled-system/css";
export { cq } from "@/styled-system/patterns";
export { cx } from "@/styled-system/css";

export const wrapper = css({})
export const mainTopLine = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,

  "@/5xl": {
    flexDirection: 'row',

  }

})

export const leftContent = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  gap: 8,
  "@/md": {
    flexDirection: 'row',

  }

})
export const pigNose = css({
  transform: "translateY(3px)",
  "@/md": {
    _last: {
      marginLeft: -5,
    }

  }
})
export const spacedTextWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  color: 'low-contrast',
  fontWeight: 'bolder',


})
export const lastSpacedWord = css({
  color: 'white',

})
export const spacedText = css({
  letterSpacing: 5,
  height: 'fit-content',
  fontSize: 'xs',
  display: 'flex',
  "@/2xl": {
    letterSpacing: 20,
  }

})

export const mainBottomLine = css({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 3,
})
export const linksWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  gap: 5,

  '& > div': {
    display: "flex",
    flexDirection: 'column',
    gap: 1,
    flex: '1 1 calc(33%)',
    width: 'full'
  },
  '& h2': {
    fontWeight: 'bolder',
  },
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  '& li': {
    fontSize: 'sm',
    color: 'low-contrast',
    position: 'relative',
    translate: "auto",
    transitionProperty: 'color transform',
    transition: ".3s",
    _hover: {
      translateX: "1.5%",
      color: 'primary',
      fontWeight: 'bolder',
      listStyle: 'disc',
      listStylePosition: 'outside'
    }
  },
})

export const mainFooter = css({
  backgroundColor: 'dark',
  padding: 5,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  md: {
    px: 10
  }

})

export const socialButtonText = css({
  maxWidth: 80,
})

export const bottomFooter = css({
  linearGradient: "270deg, #120B14 0%, #1E1221 100%",
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  textAlign: 'center'
})

export const rightsContent = css({
  color: 'low-contrast',
  fontSize: 'sm',
  maxWidth: '100px',
  _first: {
    color: 'white',
    fontWeight: "bolder",
    
    
  },
})
export const contactWrapper = css({
  display: 'flex',
  gap: 2,
  fontWeight: 'bolder',
  alignItems: 'center',
})
