import { describe, expect, test } from "vitest";
import Coupon from "../../src/domain/Coupon";

describe('Coupon', ()=>{
    test('Devec criar um cupom de desconto valido',() =>{
        const coupon = new Coupon("VALE20",20,new Date('2022-11-27'))
        const today = new Date('2022-11-26')
        const isValid = coupon.isValid(today)
        expect(isValid).toBeTruthy()
    })

    test('Devec criar um cupom de desconto expirado',() =>{
        const coupon = new Coupon("VALE20",20, new Date('2022-03-01'))
        const today = new Date('2022-11-26')
        const isExpired = coupon.isExpired(today)
        expect(isExpired).toBeTruthy()
    })

    test('Devec criar um cupom de desconto valido e caulcular o desconto',() =>{
        const coupon = new Coupon("VALE20",20)
        const discount = coupon.calculateDiscount(1000)
        expect(discount).toBe(200)
    })
})