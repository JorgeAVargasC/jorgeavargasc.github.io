import { IUserRepository } from '@core/landing/user/domain/repositories'
import { userInfo } from './get.user.info.response'

export const getUserInfo: IUserRepository['getUserInfo'] = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userInfo)
    }, 2000)
  })
}
