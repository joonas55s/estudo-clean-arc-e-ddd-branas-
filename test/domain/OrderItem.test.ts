import { describe, expect, test } from "vitest";
import OrderItem from "../../src/domain/OrderItem";


describe("OrderItem", () => {
    test("Deve criar um item do pedido", () => {
       const orderItem = new OrderItem(1,1000,10)
       expect(orderItem.getTotal()).toBe(10000)
    })

})