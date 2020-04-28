export class bankAccount {
    owner: string;
    balance: number;
    transactions: number[] = [];

    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }


    getBalance() {
        return this.balance
    }

    withdrawal(amount) {
        this.transactions.push(amount)
        this.balance = this.balance-amount
    }

    deposit(amount) {
        this.transactions.push(amount)
        this.balance += amount
    }


}