import React from 'react'
import { LandingNavbar } from './_layout/components/landing.navbar'

type Props = {
  children: React.ReactNode
}

const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <LandingNavbar />
      <div className='max-w-screen-2xl px-6'>{children}</div>
    </div>
  )
}

export default LandingLayout
