import { cva } from '@/styled-system/css'
export { cx } from '@/styled-system/css'

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
    outline: 'none',
    flexShrink: 0,
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
      },
      icon: {
        _hover: {
          opacity: '0.7'
        }
      },
      outline: {
        borderWidth: 1,
        padding: '2',
        _hover: {
          opacity: '0.7'
        }
      },
      social: {
        textWrap: 'wrap',
        textAlign: 'start',
        maxWidth: 'full',
        fontSize: 'md',
        fontWeight: "normal",
        gap: '5',
        md: {
        maxWidth: 'sm',
        }
      },
    },
      
      color: {
        primary: {
          background: `linear-gradient(96.45deg, #E90083 19.95%, #FF6864 115.62%), linear-gradient(91.16deg, rgba(255, 140, 184, 0.78) 1%, rgba(255, 148, 187, 0) 29.61%)`,
          boxShadow: '0px 11px 26.8px 0px #E900833D'
        
        },
        blue: {
          background: `linear-gradient(96.45deg, #34BDC6 19.95%, #299CDC 115.62%)`,
          boxShadow: '0px 11px 26.8px 0px #2CA5D612'

        },
        dark: {
          background: `linear-gradient(96.45deg, #0D0B0C 19.95%, #1C1717 115.62%)`,
          border: '1px solid var(--colors-neutral-300)',
          boxShadow: '0px 11px 26.8px 0px #2A1A2F4A',
  
        }
      },
    
    size: {
      sm: {
        fontSize: 'xm',
        paddingX: 2,
        paddingY: 1,
        fontWeight: 'bolder'
      },
      md: { height: '10', fontSize: 'sm', gap: '2', paddingInline: '4', fontWeight: 'bolder' },
      lg: {minHeight: '20', paddingInline: '4' }
    },
    shape: {
      rounded: {
        rounded: 'lg',
      }
    }
  }
})