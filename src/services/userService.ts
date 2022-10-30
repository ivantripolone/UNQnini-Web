import { User } from '../types/user'
import genericService from './genericService'

const service = genericService('/user')

const userService = {
    getUser: (username: string) => service.get<User>(`/${username}`)
}

export default userService


