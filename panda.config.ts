import { defineConfig } from "@pandacss/dev";
import localFont from 'next/font/local'




export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors: {
          "white": { value: '#FFFFFF'},
          "primary": { value: '#E90083'},
          "elevation-1": { value: '#170D19'},
          "elevation-2": { value: '#251929' },
          "elevation-3": { value: '#35243D' },
          "low-contrast": { value: '#826B8E' },
        },
        fonts: {
          agletSans: { value: 'var(--font-aglet-sans), sans-serif' },
        }
      }
    },
  },

  outdir: "styled-system",
});
