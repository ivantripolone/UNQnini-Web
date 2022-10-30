import { LoginData } from '../types/loginData'
import { RecoverPasswordData } from '../types/recoverPasswordData'

import genericService from './genericService'

const service = genericService('/login')

const loginService = {
    postLogin: (data: LoginData) => service.post<string>('/validate', data),
    postRecoverPassword: (data: RecoverPasswordData) => service.post<string>('/recover', data),
}

export default loginService