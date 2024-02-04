'use client'
import { Controller, get, useFormContext } from 'react-hook-form'

import { ISelect } from './select.model'
import { Select as NextUISelect, SelectItem } from '@nextui-org/react'

export const Select = ({
  name,
  isVisible = true,
  items,
  color = 'primary',
  size = 'sm',
  variant = 'bordered',
  ...rest
}: ISelect) => {
  const {
    control,
    formState: { errors, defaultValues }
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
                defaultSelectedKeys={defaultValues ? [defaultValues[name]] : undefined}
                {...field}
                {...rest}
              >
                {items?.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
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
