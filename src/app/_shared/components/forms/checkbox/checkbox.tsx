'use client'
import { Controller, get, useFormContext } from 'react-hook-form'

import { ICheckbox } from './checkbox.model'
import { Checkbox as NextUICheckbox } from '@nextui-org/react'

export const Checkbox = ({ name, label, isVisible = true, ...rest }: ICheckbox) => {
  const {
    formState: { errors },
    control
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
              <div className='flex flex-col'>
                <NextUICheckbox isInvalid={!!errorMessage} {...field} {...rest}>
                  {label}
                </NextUICheckbox>
                {errorMessage && <small className='text-danger-500'>{errorMessage}</small>}
              </div>
            )}
          </>
        )}
      />
    </>
  )
}
