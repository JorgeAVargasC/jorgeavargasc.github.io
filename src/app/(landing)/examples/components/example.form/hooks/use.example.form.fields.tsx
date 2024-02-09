'use client'
import {
  IFormFields,
  IFormValues,
  amenitiesOptions,
  genderOptions,
  planOptions,
  skillsOptions
} from '../models'
import { UseFormReturn } from 'react-hook-form'

type Props = {
  methods: UseFormReturn<IFormValues, any, IFormValues>
}

export const useExampleFormFields = ({ methods }: Props) => {
  const form: IFormFields = {
    fullName: {
      name: 'fullName',
      label: 'Full Name'
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
      options: genderOptions
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
      options: skillsOptions,
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
      label: 'Accept'
      // placeholder: 'Accept'
    },
    amenities: {
      name: 'amenities',
      label: 'Amenities',
      options: amenitiesOptions,
      inputMode: 'text'
    },
    plan: {
      name: 'plan',
      label: 'Plan',
      options: planOptions
    }
  }

  return {
    form
  }
}
