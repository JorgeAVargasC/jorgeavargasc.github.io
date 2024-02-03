import { IUser } from '../models'

export type IUserRepository = {
  getUserInfo: () => Promise<IUser>
}
