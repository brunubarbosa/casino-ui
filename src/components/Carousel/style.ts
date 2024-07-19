import { css } from '@/styled-system/css'
export { css } from '@/styled-system/css'
export { hstack } from '@/styled-system/patterns'

export const wrapper = css({ maxWidth: "full" })
export const header = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  mb: "4",
})

export const titleWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  textTransform: "uppercase",
  fontWeight: "bold",
})

export const subTitleWrapper = css({
  md: { display: "inline" },
  base: { display: "none" },
})

export const arrowWrapper = css({
  ml: "16px",
  display: "flex",
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
})

