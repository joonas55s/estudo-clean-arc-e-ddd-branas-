import { beforeEach, describe, expect, test } from "vitest";
import Account from "../../../../src/domain/entity/Account";



let account:Account
describe("Account", () => {
    beforeEach(function(){
        account = new Account()
    })
    test("Deve criar uma conta", () => {
        const balance = account.getBalance();
        expect(balance).toBe(0)
    })

    test("Deve fazer um credito de R$100,00", () => {
        account.credit(100);
        const balance = account.getBalance();
        expect(balance).toBe(100)
    })

    test("Deve fazer um credito de R$50,00", () => {
        account.credit(100);
        account.debit(50);
        const balance = account.getBalance();
        expect(balance).toBe(50)
    })
})