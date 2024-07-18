import { css } from '@/styled-system/css'
export { hstack } from '@/styled-system/patterns'

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

export const arrowWrapper = css({
  ml: "16px",
  display: "flex",
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
})

