'use client'
import { useThemeStore } from '@store/theme'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useThemeStore((state) => state.theme)
  return (
    <html lang='en' className={theme}>
      {children}
    </html>
  )
}
