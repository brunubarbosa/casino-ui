import { css } from '@/styled-system/css'
export { css } from '@/styled-system/css'

export const navbarWrapper = css({
  position: "sticky",
  top: 0,
  width: "full",
  color: "white",
  padding: 4,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 1000,
  backgroundColor: 'neutral-100'
});

export const logoStyles = css({
  fontSize: "1.5rem",
});
export const rightWrapper = css({
  display: 'flex',
  gap: 3


});
export const leftWrapper = css({
  display: 'flex',
  gap: 3
});
