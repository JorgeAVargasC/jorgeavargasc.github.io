import { Course } from './course.model'
import { Education } from './education.model'
import { Experience } from './experience.model'
import { Language } from './language.model'
import { Links } from './links.model'
import { Project } from './project.model'
import { Residence } from './residence.model'
import { Skill } from './skill.model'
import { TechSkill } from './tech.skill.model'

export type IUser = {
  name: string
  birthday: string
  country: string
  role: string
  email: string
  residence: Residence
  phone: string
  bio: string
  shortbio: string
  projects: Project[]
  experience: Experience[]
  education: Education[]
  courses: Course[]
  techSkills: TechSkill[]
  links: Links
  skills: Skill[]
  languages: Language[]
  hobbieText: string
  hobbies: string[]
}