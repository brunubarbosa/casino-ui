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
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        // Figma values
        colors: {
          "white": { value: '#FFFFFF'},
          "primary": { value: '#E90083'},
          "elevation-1": { value: '#170D19'},
          "elevation-2": { value: '#251929' },
          "elevation-3": { value: '#35243D' },
          "low-contrast": { value: '#826B8E' },
        },
        fontSizes: {
          sm: {value: '.875rem'}
        },
        fontWeights: {
          normal: {value: 500}
        },
        fonts: {
          agletSans: { value: 'var(--font-aglet-sans), sans-serif' },
        },
      },
      semanticTokens: {
        colors: {
          "neutral-100": {value: '{colors.elevation-1}'},
          "neutral-200": {value: '{colors.elevation-2}'},
          "neutral-300": {value: '{colors.elevation-3}'},
        }
      },
      textStyles
    },
  },
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  outdir: "styled-system",
  jsxFramework: 'react'
});
