'use client'
import { Controller, get, useFormContext } from 'react-hook-form'

import { ISelect } from './select.model'
import { Select as NextUISelect, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

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
    formState: { errors, defaultValues }
  } = useFormContext()

  const errorMessage = get(errors, name)?.message

  const [initialOptions, setInitialOptions] = useState<ISelect['options']>([])
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([])

  useEffect(() => {
    options && options.length > 0 && setInitialOptions(options)
  }, [options])

  useEffect(() => {
    defaultValues &&
      initialOptions.length > 0 &&
      setDefaultSelectedKeys(defaultValues[name].split(','))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialOptions])

  useEffect(() => {
    console.log('defaultSelectedKeys', defaultSelectedKeys)
  }, [defaultSelectedKeys])

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, ...restField } }) => (
          <>
            {isVisible && (
              <NextUISelect
                errorMessage={errorMessage}
                color={color}
                size={size}
                variant={variant}
                defaultSelectedKeys={defaultSelectedKeys}
                value={value.split(',')}
                {...restField}
                {...rest}
              >
                {initialOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
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
