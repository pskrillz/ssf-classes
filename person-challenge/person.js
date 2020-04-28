"use strict";
exports.__esModule = true;
var person = /** @class */ (function () {
    function person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = true;
    }
    return person;
}());
exports.person = person;
exports.humanoidA = new person('John', 'Doe', 27);
