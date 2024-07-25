import { css } from "@/styled-system/css";
export { css } from "@/styled-system/css";


export const wrapper = css({})
export const mainTopLine = css({

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
  backgroundColor: 'elevation-3',
  padding: 5,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  md: {
    px: 10
  }

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
