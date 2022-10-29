import { UserData } from '../types/userData'
import genericService from './genericService'

const service = genericService('/login')

const loginService = {
    postLogin: (data: UserData) => service.post<string>('/validate', data),
}

export default loginService