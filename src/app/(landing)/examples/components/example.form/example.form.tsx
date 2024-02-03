'use client'

import { FormProvider } from 'react-hook-form'
import { useExampleForm } from './hooks'
import {
  Checkbox,
  CheckboxGroup,
  Input,
  RadioGroup,
  Select,
  Submit,
  TextArea
} from '@components/forms'
import { Code } from '@nextui-org/react'

export const ExampleForm = () => {
  const { methods, onSubmit, form, submit } = useExampleForm()

  return (
    <div className='grid grid-cols-2 gap-4'>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className='grid gap-4'>
          <Input {...form.fullName} />
          <Input {...form.age} />
          <Input {...form.email} />
          <Input {...form.tel} />
          <Select {...form.gender} />
          <Select {...form.skills} />
          <TextArea {...form.description} />
          <Checkbox {...form.accept} />
          <CheckboxGroup {...form.amenities} />
          <RadioGroup {...form.plan} />
          <Submit {...submit}>Submit</Submit>
          <button type='reset' onClick={() => methods.reset()} className='btn btn-secondary'>
            Reset
          </button>
        </form>
      </FormProvider>

      <Code className='p-4'>
        <pre>Watched Values: </pre>
        <br />
        <pre>{JSON.stringify(methods.watch(), null, 2)}</pre>
      </Code>
    </div>
  )
}
