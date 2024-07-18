import { cva } from '@/styled-system/css'

export const buttonWrapper = cva({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    fontSize: 'sm',
    transitionProperty: 'background, box-shadow, color',
    fontWeight: 'bold',
    userSelect: 'none',
    outline: 'none'
  },
  variants: {
    visual: {
      primary: { 
        color: 'white',
        radialGradient: '50% 100% at 50% 0,var(--colors-secondary) 0,var(--colors-primary) 100%',
        backgroundColor: 'var(--colors-primary)',
        boxShadow: '0 3px #7f064d, inset 0 1px #ffa2a080',
        _hover: {
          boxShadow: '0 3px #7f064d, inset 0 1px #ffa2a0, inset 0 0 50px -25px #ffa2a0, 0 0 50px -12px #e90083a3'
        }
      },
      text: {
        fontWeight: 'bolder',
        color: 'white',

        _hover: {
          color: 'primary',
          transition: 'color .3s',
        }
      }
    },
    size: {
      sm: {
        fontSize: 'xm',
        paddingInline: '1',
        fontWeight: 'bolder'
      },
      md: { height: '10', fontSize: 'sm', gap: '2', paddingInline: '4' },
      lg: {minHeight: '20', paddingInline: '4' }
    },
    shape: {
      rounded: {
        rounded: 'lg',
      }
    }
  }
})