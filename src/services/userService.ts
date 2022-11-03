import { User } from '../types/user'
import genericService from './genericService'

const service = genericService('/user')

const userService = {
    getUser: (username: string) => service.get<User>(`/${username}`),
    postModifiedInformation: (data: User) => service.post<string>('/modifiedInformation', data),
    postRegister: (data: User) => service.post<string>('/register', data),
    
}

export default userService


