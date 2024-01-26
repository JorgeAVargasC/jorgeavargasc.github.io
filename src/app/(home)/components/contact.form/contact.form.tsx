'use client'

import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react'
import { useThemeStore } from '@store/theme'

export const ContactForm = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <div>
      <Card>
        <CardHeader>
          <h2>Form</h2>
        </CardHeader>

        <CardBody>
          <Input isRequired type='email' label='Email' defaultValue='junior@nextui.org' />
        </CardBody>
        <CardFooter>
          <Button onClick={toggleTheme} color='primary' fullWidth variant='shadow'>
            Send
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
