import { IUserRepository } from '../domain/repositories'

export const getUserUseCase = (repo: IUserRepository) => repo.getUser()
