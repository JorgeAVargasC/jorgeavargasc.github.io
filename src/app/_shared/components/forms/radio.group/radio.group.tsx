'use client'
import { Controller, get, useFormContext } from 'react-hook-form'

import { IRadioGroup } from './radio.group.model'
import { RadioGroup as NextUIRadioGroup, Radio as NextUIRadio } from '@nextui-org/react'

export const RadioGroup = ({ name, isVisible = true, options, ...rest }: IRadioGroup) => {
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
              <NextUIRadioGroup
                isInvalid={!!errorMessage}
                errorMessage={errorMessage}
                {...field}
                {...rest}
              >
                {options?.map((option, index) => (
                  <NextUIRadio key={index} value={option.value}>
                    {option.label}
                  </NextUIRadio>
                ))}
              </NextUIRadioGroup>
            )}
          </>
        )}
      />
    </>
  )
}
