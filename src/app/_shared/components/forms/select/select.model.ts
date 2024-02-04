import { SelectProps } from '@nextui-org/react'
export interface ISelect extends Omit<SelectProps, 'children'> {
  name: string
  isVisible?: boolean
  items: SelectProps['items']
  
}
