'use client'
import { get, useFormContext } from 'react-hook-form'

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
    register,
    formState: { errors }
  } = useFormContext()

  const errorMessage = get(errors, name)?.message

  return (
    <>
      {isVisible && (
        <NextUIInput
          {...register(name)}
          errorMessage={errorMessage}
          variant={variant}
          color={color}
          size={size}
          {...rest}
        />
      )}
    </>
  )
}
