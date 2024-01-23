import React from 'react'

import { NextUIProvider } from './nextui.provider'

type Props = {
  children: React.ReactNode
}

const Providers: React.FC<Props> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

export default Providers
