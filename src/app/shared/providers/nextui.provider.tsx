'use client'

import { NextUIProvider as Provider } from '@nextui-org/react'

type Props = {
  children: React.ReactNode
}

export const NextUIProvider: React.FC<Props> = ({ children }) => {
  return <Provider>{children}</Provider>
}
