'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'
import { ExampleForm } from '..'

export const Content = () => {
  return (
    <Accordion selectionMode='multiple' variant='bordered' keepContentMounted={true}>
      <AccordionItem key={1} title='Example Form' aria-label='Example Form'>
        <ExampleForm />
      </AccordionItem>
      <AccordionItem key={2} title='Example Table' aria-label='Example Table'>
        {/* <TableBasic
          ariaLabel='Basic table'
          headers={['ID', 'Name', 'Email']}
          rows={[
            ['1', 'John Doe', 'jhon.doe@email.com'],
            ['1', 'John Doe', 'jhon.doe@email.com'],
            ['1', 'John Doe', 'jhon.doe@email.com'],
            ['1', 'John Doe', 'jhon.doe@email.com']
          ]}
        /> */}
      </AccordionItem>
    </Accordion>
  )
}
