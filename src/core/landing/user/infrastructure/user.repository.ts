import { IUserRepository } from '../domain/repositories'
import { getUserInfo } from './services'

export const userRepository: IUserRepository = {
  getUserInfo
}
