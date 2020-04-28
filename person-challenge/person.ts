export class person {
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = true;
    }

}

export let humanoidA = new person('John', 'Doe', 27)

