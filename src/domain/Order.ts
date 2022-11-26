import Coupon from "./Coupon"
import Cpf from "./Cpf"
import Item from "./Item"
import OrderItem from "./OrderItem"

export default class {
    private cpf: Cpf
    private orderItems: OrderItem[]
    private coupon: Coupon | undefined

    constructor(cpf: string, readonly date: Date = new Date()) {
        this.cpf = new Cpf(cpf)
        this.orderItems = []
    }
    
    addCoupon(coupon:Coupon){
        if(coupon.isExpired(this.date)) return
        this.coupon = coupon
    }

    addItem(item: Item, quantity: number) {
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
        return total
    }
}