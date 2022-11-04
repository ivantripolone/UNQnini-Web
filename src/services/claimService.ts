import genericService from './genericService'
import { ClaimType } from '../types/claim'
const service = genericService('/claim')

const claimService = {
    postClaim: (data: ClaimType) => service.post<number>('/send', data),
}

export default claimService