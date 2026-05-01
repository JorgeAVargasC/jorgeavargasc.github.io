export const TechStackEnum = {
  REACT: 'react',
  ASTRO: 'astro',
  NEXT: 'next',
  ANGULAR: 'angular',
  TAILWIND: 'tailwind',
  HERO_UI: 'hero-ui',
  MUI: 'mui',
  TYPESCRIPT: 'typescript',
  FIREBASE: 'firebase',
  SHADCN_UI: 'shadcn-ui',
  TAILWIND_V4: 'tailwind-v4',
  VITE: 'vite',
  NODE: 'node',
} as const

export type TechStackEnum = (typeof TechStackEnum)[keyof typeof TechStackEnum]

export interface IUser {
  general: IGeneral
  recommendations: IRecommendation[]
  projects: IProject[]
  experience: IExperience[]
  education: IEducation[]
  courses: ICourse[]
  links: ILinks
}

export interface IGeneral {
  name: string
  image: string
  country: string
  role: string
  email: string
  bio: string[]
  shortBio: string
  skills: string[]
}

export interface IRecommendation {
  name: string
  username: string
  role: string
  body: string[]
  img: string
  linkedIn: string | null
}

export interface IProject {
  id: string
  name: string
  description: string
  githubURL: string
  liveURL: string
  imageUrl: string
  techStack: TechStackEnum[]
}

export interface IExperience {
  name: string
  company: string
  companyLink: string
  from: string
  to: string | null
  description: string
}

export type IEducation = {
  name: string
  institution: string
  from: string
  companyLink: string
  to: string | null
  logo?: string
}

export type ICourse = {
  id: string
  name: string
  institution: string
  from: string | null
  to: string
  link: string
  logo?: string
}

export interface ILinks {
  linkedIn: string
  linkedInRecommendations: string
  linkedInCourses: string
  github: string
  portfolio: string
  email: string
  cv: string
}
