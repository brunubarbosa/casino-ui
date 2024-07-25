import { css } from "@/styled-system/css";
export { css, cx } from "@/styled-system/css";
export { cq } from "@/styled-system/patterns";

export const sidebarWrapper = css({
  width: '240px',
  maxWidth: 0,
  overflowX: 'hidden',
  height: 'auto',
  backgroundColor: 'neutral-100',
  borderRightWidth: 1,
  transition: "max-width .3s",
  '&.sidebar-open': {
    maxWidth: '240px',
  }
})
export const sidebarHeader = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 3,
  paddingY: 5,
  gap: 5
})
export const profileDataWrapper = css({
  display: 'flex',
  alignItems: 'end',
  fontSize: 'sm',
  gap: 4,

})

export const profileData = css({
  fontWeight: 'normal',
  color: 'low-contrast',
  '& h2': {
    color: 'white',
    fontWeight: 'bolder',
    textWrap: 'nowrap',
  },
})

export const sidebarContainer = css({
  width: "full",
  color: "low-contrast",
});

export const linkStyles = css({
  padding: "0.5rem 1rem",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "neutral-200",
  },
});

export const collapsibleContainer = css({
  display: "flex",
  flexDirection: "column",
  fontWeight: "bolder",
  fontSize: "sm",
  transition: "color .3s",

  "&.expanded": {
    backgroundColor: "neutral-200",
    color: "primary",
  },
  _hover: {
    color: "primary",
  },
});

export const subLink = css({
  _hover: {
    backgroundColor: "neutral-100",
    color: "white",
    cursor: "pointer",
    borderRadius: "md",
    transition: "color, background-color .5s",
  },
  _first: {
    marginTop: 2,
  },
  _last: {
    marginBottom: 2,
  },
});
export const collapsibleContent = css({
  maxHeight: 0,
  overflow: "hidden",
  transition: "max-height 0.3s",
  color: "low-contrast",
  fontWeight: "bold",
  paddingX: 1,
  paddingY: 0,
  backgroundColor: "neutral-200",
  borderTopWidth: 1,
  "&.expanded": {
    maxHeight: "500px",
  },
});


export const contactCardWrapper = css({

  backgroundImage: `linear-gradient(99.93deg, #E90083 0%, #DE3449 100%)`,
  position: "relative",
  zIndex: "100",
  width: "200px",
  height: "86px",
  borderRadius: "md",
  padding: 4,
  fontWeight: "bolder",
  fontSize: "sm",
  willChange: "transform",
  transition: "transform .3s",
  _before: {
    content: '" "',
    display: "inline-block",
    linearGradient: '96.25deg, var(--colors-neutral-100) 30.23%, #510A41 92.14%',

    width: "196px",
    height: "82px",
    position: "absolute",
    top: "2px",
    left: "2px",
    zIndex: "-100",
    borderRadius: "md",
  },

  "& img": {
    color: "transparent",
    position: "absolute",
    top: "-7px",
    right: "-15px",
    transform: "translate(0, 0) rotate(-45deg)",
    willChange: "transform",
    transition: "transform .8s",
  },
  "& span": {
    color: "low-contrast",
    fontSize: "xs",
    fontWeight: "normal",
  },

  _hover: {
    transform: "translateY(3px)",
    "& img": {
      transform: "rotate(-20deg) translate(10px, -3px)",
    },
  },
});
export const settingsWrapper = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingRight: 1,
});
export const bottomContentWrapper = css({
  display: "flex",
  flexDirection: "column",
  paddingX: 4,
  marginTop: 24,
  gap: 5,
  fontWeight: "bolder",
});
