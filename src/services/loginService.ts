import { LoginData } from '../types/loginData'
import { Username } from '../types/username'

import genericService from './genericService'

const service = genericService('/login')

const loginService = {
    postLogin: (data: LoginData) => service.post<string>('/validate', data),
    postRecoverPassword: (data: Username) => service.post<string>('/recover', data),
}

export default loginService