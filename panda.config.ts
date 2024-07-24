import { defineConfig } from "@pandacss/dev";
import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  sm: {
    value: {
      fontSize: 'sm',
      lineHeight: '1rem',
    }
  }
})
export default defineConfig({
  preflight: true,
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  utilities: {
    extend: {
      linearGradient: {
        className: 'bg_gradient',
        shorthand: 'linearGradient',
        transform: value => ({
          backgroundImage: `linear-gradient(${value})`
        })
      },
    }
  },
  theme: {
    extend: {
      containerNames: ['sidebar', 'content'],
      tokens: {
        spacing: {
          '2xs': {value: '.75rem'}
        },
        // Figma values
        colors: {
          "white": { value: '#FFFFFF'},
          "primary": { value: '#E90083'},
          "secondary": {value: '#ff6864'},
          "elevation-1": { value: '#170D19'},
          "elevation-2": { value: '#251929' },
          "elevation-3": { value: '#35243D' },
          "low-contrast": { value: '#826B8E' },
          "error": { value: '#DE3449' },
          "success": { value: '#24D861' },
        },
        
        fontSizes: {
          xm: {value: '.75rem'},
          sm: {value: '.875rem'},
          md: {value: '1rem'},
          lg: {value: '1.125rem'},
          xl: {value: '1.25rem'},
          "1xl": {value: '1.5rem'},
          "2xl": {value: '2rem'},
          
        },
        fontWeights: {
          normal: {value: 400},
          bold: {value: 600},
          bolder: {value: 700}
        },
        fonts: {
          agletSans: { value: 'var(--font-aglet-sans), sans-serif' },
        },
        gradients: {
          primary: {
          value: 'linear-gradient(129.59deg, #FE1CB2 2.58%, #FF616B 95.56%)'
        }
      },
      
      },
      semanticTokens: {
        colors: {
          "neutral-100": {value: '{colors.elevation-1}'},
          "neutral-200": {value: '{colors.elevation-2}'},
          "neutral-300": {value: '{colors.elevation-3}'},
          "border": {value: '{colors.elevation-3}'},
        },
      },
      textStyles
    },
  },
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  outdir: "styled-system",
  jsxFramework: 'react'
});
