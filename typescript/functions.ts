// functions in typescript

let add = function (x: number, y: number) {
    return x * y + ' is result';
}


console.log(add(4, 3));


// interface 
interface User{
    readonly id: number,
    role: string,
    otp: boolean,
    age?: number
}

let user1: User = {
    id: 2,
    role: 'admin',
    otp: true
}