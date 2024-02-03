import { SelectProps } from '@nextui-org/react'
export interface ISelect extends Omit<SelectProps, 'items' | 'children'> {
  name: string
  isVisible?: boolean
  options: {
    value: string
    label: string
  }[]
}
