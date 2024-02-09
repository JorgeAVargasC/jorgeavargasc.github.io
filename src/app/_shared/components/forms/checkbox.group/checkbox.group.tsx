'use client'
import { Controller, get, useFormContext } from 'react-hook-form'

import { ICheckboxGroup } from './checkbox.group.model'
import {
  CheckboxGroup as NextUICheckboxGroup,
  Checkbox as NextUICheckboxItem
} from '@nextui-org/react'

export const CheckboxGroup = ({ name, isVisible = true, options, ...rest }: ICheckboxGroup) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const errorMessage = get(errors, name)?.message

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            {isVisible && (
              <NextUICheckboxGroup
                isInvalid={!!errorMessage}
                errorMessage={errorMessage}
                {...field}
                {...rest}
              >
                {options?.map((option, index) => (
                  <NextUICheckboxItem key={index} value={option.value}>
                    {option.label}
                  </NextUICheckboxItem>
                ))}
              </NextUICheckboxGroup>
            )}
          </>
        )}
      />
    </>
  )
}
