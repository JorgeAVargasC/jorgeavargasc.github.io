'use client'
import { Controller, get, useFormContext } from 'react-hook-form'

import { IInput } from './input.model'
import { Input as NextUIInput } from '@nextui-org/react'

export const Input = ({
  name,
  isVisible = true,
  size = 'sm',
  color = 'primary',
  variant = 'bordered',
  ...rest
}: IInput) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const errorMessage = get(errors, name)?.message

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {isVisible && (
              <NextUIInput
                errorMessage={errorMessage}
                variant={variant}
                color={color}
                size={size}
                {...field}
                {...rest}
              />
            )}
          </>
        )}
      />
    </>
  )
}
