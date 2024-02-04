'use client'
import { IFormFields, IFormValues } from '../models'
import { UseFormReturn } from 'react-hook-form'

type Props = {
  methods: UseFormReturn<IFormValues, any, IFormValues>
}

export const useExampleFormFields = ({ methods }: Props) => {
  const form: IFormFields = {
    fullName: {
      name: 'fullName',
      label: 'Full Name',
      // placeholder: 'Enter your full name',
    },
    age: {
      name: 'age',
      label: 'Age',
      // placeholder: 'Enter your age',
      inputMode: 'numeric'
    },
    email: {
      name: 'email',
      label: 'Email',
      // placeholder: 'Enter your email',
      inputMode: 'email'
    },
    gender: {
      name: 'gender',
      label: 'Gender',
      // placeholder: '',
      options: [
        {
          value: 'male',
          label: 'Male'
        },
        {
          value: 'female',
          label: 'Female'
        }
      ]
    },
    description: {
      name: 'description',
      label: 'Description',
      // placeholder: 'Enter your description',
      inputMode: 'text'
    },
    skills: {
      name: 'skills',
      label: 'Skills',
      // placeholder: 'Enter your skills',
      selectionMode: 'multiple',
      options: [
        {
          value: 'react',
          label: 'React'
        },
        {
          value: 'vue',
          label: 'Vue'
        },
        {
          value: 'angular',
          label: 'Angular'
        },
        {
          value: 'nextjs',
          label: 'Next.js'
        }
      ],
      inputMode: 'text'
    },
    tel: {
      name: 'tel',
      label: 'Tel',
      // placeholder: 'Enter your tel',
      inputMode: 'tel'
    },
    accept: {
      name: 'accept',
      label: 'Accept',
      // placeholder: 'Accept'
    },
    amenities: {
      name: 'amenities',
      label: 'Amenities',
      options: [
        {
          value: '1',
          label: 'Pool'
        },
        {
          value: '2',
          label: 'Gym'
        }
      ],
      inputMode: 'text'
    },
    plan: {
      name: 'plan',
      label: 'Plan',
      options: [
        {
          value: '1',
          label: 'Basic'
        },
        {
          value: '2',
          label: 'Pro'
        },
        {
          value: '3',
          label: 'Enterprise'
        }
      ]
    }
  }

  return {
    form
  }
}
