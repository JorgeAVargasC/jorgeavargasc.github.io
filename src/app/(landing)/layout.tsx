import React from 'react'
import { LandingNavbar } from './_layout/components/landing.navbar'

type Props = {
  children: React.ReactNode
}

const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col items-center'>
      <LandingNavbar />
      <main className='w-full max-w-screen-xl px-6'>{children}</main>
    </div>
  )
}

export default LandingLayout
