'use client'

import React from 'react'
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Skeleton
} from '@nextui-org/react'
import { useThemeStore } from '@store/theme'

export const ContactForm = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <>
      <Card className='w-full'>
        <CardHeader>
          <h2>Form</h2>
          <Skeleton className='rounded-lg w-[200px]'>
            <div className='h-8 rounded-lg bg-default-300'></div>
          </Skeleton>
        </CardHeader>
        <Divider />

        <CardBody>
          <Accordion selectionMode='multiple'>
            <AccordionItem key='1' aria-label='Accordion 1' title='Accordion 1'>
              <Input isRequired type='email' label='Email' defaultValue='junior@nextui.org' />
            </AccordionItem>
            <AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
              <Input isRequired type='email' label='Email' defaultValue='junior@nextui.org' />
              <Dropdown>
                <DropdownTrigger>
                  <Button variant='bordered'>Open Menu</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label='Static Actions'>
                  <DropdownItem key='new'>New file</DropdownItem>
                  <DropdownItem key='copy'>Copy link</DropdownItem>
                  <DropdownItem key='edit'>Edit file</DropdownItem>
                  <DropdownItem key='delete' className='text-danger' color='danger'>
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </AccordionItem>
            <AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'>
              <div
                className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4
                '
              >
                <Checkbox defaultSelected color='default'>
                  Default
                </Checkbox>
                <Checkbox defaultSelected color='primary'>
                  Primary
                </Checkbox>
                <Checkbox defaultSelected color='secondary'>
                  Secondary
                </Checkbox>
                <Checkbox defaultSelected color='success'>
                  Success
                </Checkbox>
                <Checkbox defaultSelected color='warning'>
                  Warning
                </Checkbox>
                <Checkbox defaultSelected color='danger'>
                  Danger
                </Checkbox>
              </div>
            </AccordionItem>
            <AccordionItem key='4' aria-label='Accordion 4' title='Accordion 4'>
              <CheckboxGroup label='Select cities' defaultValue={['buenos-aires', 'london']}>
                <Checkbox value='buenos-aires'>Buenos Aires</Checkbox>
                <Checkbox value='sydney'>Sydney</Checkbox>
                <Checkbox value='san-francisco'>San Francisco</Checkbox>
                <Checkbox value='london'>London</Checkbox>
                <Checkbox value='tokyo'>Tokyo</Checkbox>
              </CheckboxGroup>
            </AccordionItem>
          </Accordion>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button onClick={toggleTheme} color='primary' fullWidth variant='shadow'>
            Send
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
