"use strict";
// classes in ts
class Candidate {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let student = new Candidate(1, 'Twahir');
let student2 = new Candidate(2, 'Ally');
console.log(student, student2);
class createPerson {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
    method() {
        return `${this.username} is registered successfully! with id of ${this.id}`;
    }
}
let User = new createPerson(45, 'BlackCoder');
console.log(User);
console.log(User.method());
// extend the class
class Boss extends createPerson {
    constructor(id, username, position) {
        super(id, username); // inherit from createPerson
        this.position = position;
    }
}
// also we can declare class as this
const water = class {
};
const latifa = new Boss(5, 'Typhash', 'Manager');
console.log(latifa.position);
console.log(latifa);
console.log(latifa.method());
