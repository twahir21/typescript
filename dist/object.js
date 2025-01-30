"use strict";
// ts obj first method
let user = {
    id: 1,
    name: "Twahir",
    age: 21
};
let candidate = {
    email: 'twahirsudy3@gmal.com',
    fileNo: 2023434,
    isValid: false
};
console.log(user.name);
// type assertion
let cid = "one";
let customerId = cid; // customerID must be number
let adminId = cid; // adminId must be boolean
