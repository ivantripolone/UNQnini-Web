import { UserData } from '../types/userData'
import { RecoverPasswordData } from '../types/recoverPasswordData'

import genericService from './genericService'

const service = genericService('/login')

const loginService = {
    postLogin: (data: UserData) => service.post<string>('/validate', data),
    postRecoverPassword: (data: RecoverPasswordData) => service.post<string>('/recover', data),
}

export default loginService