'use client'

import { NextUIProvider as Provider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

export const NextUIProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  return <Provider navigate={router.push}>{children}</Provider>
}
