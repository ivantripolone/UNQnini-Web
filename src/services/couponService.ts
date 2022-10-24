import genericService from './genericService'

const service = genericService('/coupon')

const couponService = {
    postCoupon: (data: object) => service.post<number>('/validate', data),
}

export default couponService