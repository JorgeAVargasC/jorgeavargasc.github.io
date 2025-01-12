import { IUser } from '../domain/interfaces'
import {
	experience,
	projects,
	recommendations,
	courses,
	education,
	links,
	general
} from './data'

export const getUserInfo = (): IUser => {
	const userInfo: IUser = {
		general,
		recommendations,
		projects,
		experience,
		education,
		courses,
		links
	}

	return userInfo
}
