import type { IUser } from '../domain/interfaces/user.interface'
import { general } from './data/general'
import { recommendations } from './data/recommendations'
import { projects } from './data/projects'
import { experience } from './data/experience'
import { education } from './data/education'
import { courses } from './data/courses'
import { links } from './data/links'

export const userInfo: IUser = {
	general,
	recommendations,
	projects,
	experience,
	education,
	courses,
	links
}
