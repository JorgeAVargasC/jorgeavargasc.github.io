'use client'
import { Controller, get, useFormContext } from 'react-hook-form'

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
              <NextUITextArea
                color={color}
                size={size}
                variant={variant}
                errorMessage={errorMessage}
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
