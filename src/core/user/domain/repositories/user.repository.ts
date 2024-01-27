import { IUser } from '../models'

export type IUserRepository = {
  getUser: () => Promise<IUser>
}
