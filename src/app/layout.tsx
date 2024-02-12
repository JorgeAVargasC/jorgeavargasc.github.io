import type { Metadata } from 'next'
import { ThemeProvider, FontsProvider, NextUIProvider } from './_shared/providers/index'
import '@styles/index.css'

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Jorge Vargas | Portfolio',
  description: 'A Fullstack Developer Portfolio',
  keywords: [
    'Jorge Vargas',
    'Portfolio',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'NextUI',
    'Fullstack Developer'
  ],
  icons: [
    {
      url: '/favicon.ico',
      href: '/favicon.ico',
      rel: 'icon',
      sizes: '256x256',
      type: 'image/x-icon'
    },
    {
      url: '/apple512.png',
      href: '/apple512.png',
      rel: 'apple-touch-icon',
      sizes: '512x512',
      type: 'image/png'
    }
  ]
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <FontsProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </FontsProvider>
    </ThemeProvider>
  )
}

export default RootLayout
