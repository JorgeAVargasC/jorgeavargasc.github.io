import { IUserRepository } from '../domain/repositories'

export const getUserInfoUseCase = (repo: IUserRepository) => repo.getUserInfo()
