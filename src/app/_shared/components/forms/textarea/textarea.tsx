'use client'
import { Controller, useFormContext } from 'react-hook-form'

import { ITextArea } from './textarea.model'
import { Textarea as NextUITextArea } from '@nextui-org/react'

export const TextArea = ({
  name,
  isVisible = true,
  size = 'md',
  variant = 'bordered',
  color = 'primary',
  ...rest
}: ITextArea) => {
  const {
    control,
  } = useFormContext()

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            {isVisible && (
              <NextUITextArea
                color={color}
                size={size}
                variant={variant}
                errorMessage={fieldState.error?.message}
                isInvalid={fieldState.invalid}
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
