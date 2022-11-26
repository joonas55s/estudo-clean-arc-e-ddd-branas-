import { describe, expect, test } from "vitest";
import Coupon from "../../src/domain/Coupon";
import Item from "../../src/domain/Item";
import Order from "../../src/domain/Order";

describe("Account", () => {
    test("Deve criar um pedido com CPF válido", () => {
        const cpf = "839.435.452-10"
        const order = new Order(cpf)
        const total = order.getTotal()
        expect(total).toBe(0)
    })

    test("Deve tentar pedido com CPF inválido", () => {
        const cpf = "111.111.111-11"
        expect(() => new Order(cpf)).toThrow(new Error("Invalid cpf"))
    })

    test("Deve criar um pedido com 3 items", () => {
        const cpf = "839.435.452-10"
        const order = new Order(cpf)
        order.addItem(new Item(1, "Música", "CD", 30), 3)
        order.addItem(new Item(2, "Vídeo", "DVD", 50), 1)
        order.addItem(new Item(3, "Música", "MP3", 10), 2)
        const total = order.getTotal()
        expect(total).toBe(160)
    })

    test("Deve criar um pedido com 3 items com um cupom de desconto", () => {
        const cpf = "839.435.452-10"
        const order = new Order(cpf)
        order.addItem(new Item(1, "Música", "CD", 30), 3)
        order.addItem(new Item(2, "Vídeo", "DVD", 50), 1)
        order.addItem(new Item(3, "Música", "MP3", 10), 2)
        order.addCoupon(new Coupon("VALE20",20))
        const total = order.getTotal()
        expect(total).toBe(128)
    })
    
    test("Deve criar um pedido com 3 items com um cupom de desconto expirado", () => {
        const cpf = "839.435.452-10"
        const order = new Order(cpf, new Date('2021-12-10'))
        order.addItem(new Item(1, "Música", "CD", 30), 3)
        order.addItem(new Item(2, "Vídeo", "DVD", 50), 1)
        order.addItem(new Item(3, "Música", "MP3", 10), 2)
        order.addCoupon(new Coupon("VALE20",20, new Date('2021-12-01')))
        const total = order.getTotal()
        expect(total).toBe(160)
    })
})