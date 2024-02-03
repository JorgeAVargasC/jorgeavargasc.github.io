'use client'
import { Controller, get, useFormContext } from 'react-hook-form'

import { ISelect } from './select.model'
import { Select as NextUISelect, SelectItem } from '@nextui-org/react'

export const Select = ({
  name,
  isVisible = true,
  options,
  color = 'primary',
  size = 'sm',
  variant = 'bordered',
  ...rest
}: ISelect) => {
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
              <NextUISelect
                errorMessage={errorMessage}
                color={color}
                size={size}
                variant={variant}
                {...field}
                {...rest}
              >
                {options?.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </NextUISelect>
            )}
          </>
        )}
      />
    </>
  )
}
