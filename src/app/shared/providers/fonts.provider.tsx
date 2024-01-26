import React from 'react'

import { Poppins } from 'next/font/google'

type Props = {
  children: React.ReactNode
}

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const FontsProvider: React.FC<Props> = ({ children }) => {
  return <body className={`${poppins.className}`}>{children}</body>
}
