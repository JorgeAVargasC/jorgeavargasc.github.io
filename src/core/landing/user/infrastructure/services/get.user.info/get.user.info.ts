import { IUserRepository } from '@core/landing/user/domain/repositories'
import { userInfo } from './get.user.info.response'

export const getUserInfo: IUserRepository['getUserInfo'] = async () => {
  return await userInfo
}
