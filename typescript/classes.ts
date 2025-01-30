// classes in ts
class Candidate {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }
}

let student = new Candidate(1, 'Twahir')
let student2 = new Candidate(2, 'Ally')

console.log(student, student2)


// classes with interfaces
interface createPersons{
    id: number
    username: string
    email?: string
    method(): string
}

class createPerson implements createPersons{
    id: number // by default these id and username are public accessible but can be protected or be private
    username: string;
    email?: string | undefined;

    constructor(id: number, username: string){
        this.id = id;
        this.username = username
    }

    method(): string {
        return `${this.username} is registered successfully! with id of ${this.id}`
    }
}

let User = new createPerson(45,'BlackCoder');
console.log(User)
console.log(User.method())


// extend the class
class Boss extends createPerson{
    position: string

    constructor(id: number, username: string, position: string){
        super(id, username); // inherit from createPerson
        this.position = position
    }
}

// also we can declare class as this
const water = class{
    // logic here
}

const latifa = new Boss(5, 'Typhash', 'Manager');

console.log(latifa.position);
console.log(latifa);
console.log(latifa.method())