import {
	Course,
	Education,
	Experience,
	Language,
	Links,
	Project,
	Review,
	Skill,
	TechSkill
} from '.'

export type IUser = {
	name: string
	image: string
	country: string
	role: string
	email: string
	bio: string[]
	shortbio: string
	reviews: Review[]
	projects: Project[]
	experience: Experience[]
	education: Education[]
	courses: Course[]
	techSkills: TechSkill[]
	links: Links
	skills: Skill[]
	languages: Language[]
}
