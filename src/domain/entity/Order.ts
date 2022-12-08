import Coupon from "./Coupon"
import Cpf from "./Cpf"
import DefaultFreightCalculator from "./DefaultFreightCalculator"
import FreigthCalculator from "./FreigthCalculator"
import Item from "./Item"
import OrderItem from "./OrderItem"

export default class {
    private cpf: Cpf
    private orderItems: OrderItem[]
    private coupon: Coupon | undefined
    private freight: number

    constructor(cpf: string, readonly date: Date = new Date(), readonly defaultFreightCalculator:FreigthCalculator = new DefaultFreightCalculator) {
        this.cpf = new Cpf(cpf)
        this.orderItems = []
        this.freight = 0
    }
    
    addCoupon(coupon:Coupon){
        if(coupon.isExpired(this.date)) return
        this.coupon = coupon
    }

    addItem(item: Item, quantity: number) { 
        this.freight += this.defaultFreightCalculator.calculate(item) * quantity
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
    }

    getTotal() {
        let total = 0
        for (const orderItem of this.orderItems) {
            total += orderItem.price * orderItem.quantity
        }
        if(this.coupon){
            total -= this.coupon.calculateDiscount(total)
        }
        total += this.getFreight()
        return total
    }

    getFreight(){
         return this.freight
    }
}