import { TechStackEnum } from '../enums'

export interface IProject {
	id: string
	name: string
	description: string
	githubURL: string
	liveURL: string
	imageUrl: string
	techStack: TechStackEnum[]
}
