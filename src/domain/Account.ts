export default class Account{
    private balance:number = 0
    constructor(){}

    getBalance(){
        return this.balance
    }

    credit (ammount:number){
       this.balance += ammount
    }

    debit (ammount:number){
        this.balance -= ammount
     }
}