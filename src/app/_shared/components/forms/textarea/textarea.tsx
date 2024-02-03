'use client'
import { get, useFormContext } from 'react-hook-form'

import { ITextArea } from './textarea.model'
import { Textarea as NextUITextArea } from '@nextui-org/react'

export const TextArea = ({
  name,
  isVisible = true,
  size = 'sm',
  variant = 'bordered',
  color = 'primary',
  ...rest
}: ITextArea) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const errorMessage = get(errors, name)?.message

  return (
    <>
      {isVisible && (
        <NextUITextArea
          {...register(name)}
          color={color}
          size={size}
          variant={variant}
          errorMessage={errorMessage}
          {...rest}
        />
      )}
    </>
  )
}
