import React from 'react'
import { Metadata } from 'next'
import { Content } from './components'

export const metadata: Metadata = {
  title: 'Jorge Vargas | Examples'
}

const ExamplePage = () => {
  return <Content />
}

export default ExamplePage
