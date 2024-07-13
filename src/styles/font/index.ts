import localFont from 'next/font/local'

export const AgletSans = localFont({src: [
    {
      path: "../../../public/fonts/Aglet-Sans.otf",
      weight: '300',
      style: 'normal',
    },
    {
      path: "../../../public/fonts/Aglet-Sans-Regula.otf",
      weight: '400',
      style: 'normal',
    },
    {
      path: "../../../public/fonts/Aglet-Sans-Bold.otf",
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aglet-sans',
  display: 'swap',
});