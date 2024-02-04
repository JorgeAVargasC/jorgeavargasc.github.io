'use client'
import { useThemeStore } from '@store/theme'
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useThemeStore((state) => state.theme)
  const setTheme = useThemeStore((state) => state.setTheme)
  
  useEffect(() => {
    const preferDark = window?.matchMedia('(prefers-color-scheme: dark)')
    setTheme(preferDark.matches ? 'dark' : 'light')
  }, [setTheme])

  return (
    <html lang='en' className={theme}>
      {children}
    </html>
  )
}
