// all tuple concept 
// is a special type in typescript used to accept the values under condition


// simple
let person: [number, string, boolean] = [21, 'Twahir', true]

// with arr as datatype
let students: [number, string[], boolean] = [10, ['juma', 'hit'], true]

// with arr format 
let employee: [number, string] [] = [
    [1, 'John'],
    [2, 'Latifa'],
    [3, 'Mbappe']
]

// union is using more dataype in tuple
let productId: string | number = 3 // means accept only number or string