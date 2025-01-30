"use strict";
// generics in ts
// are used to create re-usable component under certain rule
function getArray(items) {
    return new Array().concat(items); // concat is for joining and T is placeholder which waits data type to be passed
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['cooking', 'sleeping', 'reading']);
//strArray.push(2) // error expect strings
strArray.push('listening');
