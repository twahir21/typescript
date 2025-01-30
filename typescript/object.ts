// ts obj first method
let user : {
    id: number,
    name: string,
    age: number
} = {
    id: 1,
    name: "Twahir",
    age: 21
}

// second method
type Employee = {
    email: string,
    fileNo: number,
    isValid: boolean
}

let candidate: Employee = {
    email: 'twahirsudy3@gmal.com',
    fileNo: 2023434,
    isValid: false
}

console.log(user.name)

// type assertion
let cid: any = "one";

let customerId = <number> cid // customerID must be number

let adminId = cid as boolean // adminId must be boolean


