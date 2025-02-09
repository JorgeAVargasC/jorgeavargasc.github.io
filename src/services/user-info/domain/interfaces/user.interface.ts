import type { ICourse } from './course.interface'
import type { IEducation } from './education.interface'
import type { IExperience } from './experience.interface'
import type { IGeneral } from './general.interface'
import type { ILinks } from './links.interface'
import type { IProject } from './project.interface'
import type { IRecommendation } from './recommendation.interface'

export interface IUser {
	general: IGeneral
	recommendations: IRecommendation[]
	projects: IProject[]
	experience: IExperience[]
	education: IEducation[]
	courses: ICourse[]
	links: ILinks
}
