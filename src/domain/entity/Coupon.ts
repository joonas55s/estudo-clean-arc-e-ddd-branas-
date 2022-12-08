export default class Coupon {
    constructor(readonly code: string, readonly percentage: number, readonly expireDate?:Date) {

    }

    isValid(today:Date = new Date()){
        if(!this.expireDate) return true
        return this.expireDate.getTime() >= today.getTime()
    }

    isExpired(today:Date = new Date()){
        return !this.isValid(today)
    }

    calculateDiscount(ammount:number){
        if(this.isExpired()) return ammount
        return (ammount * this.percentage) / 100
    }

}