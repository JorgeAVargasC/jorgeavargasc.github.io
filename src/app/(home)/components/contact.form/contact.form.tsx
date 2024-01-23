'use client'
import { Input } from '@nextui-org/react'
import React from 'react'

export const ContactForm = () => {
  return (
    <div>
      <Input type='email' label='Email' defaultValue='junior@nextui.org' className='max-w-xs' />
    </div>
  )
}
