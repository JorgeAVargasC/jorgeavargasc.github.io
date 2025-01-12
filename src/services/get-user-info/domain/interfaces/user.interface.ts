import {
	ICourse,
	IEducation,
	IExperience,
	IGeneral,
	ILinks,
	IProject,
	IRecommendation
} from '.'

export interface IUser {
	general: IGeneral
	recommendations: IRecommendation[]
	projects: IProject[]
	experience: IExperience[]
	education: IEducation[]
	courses: ICourse[]
	links: ILinks
}
