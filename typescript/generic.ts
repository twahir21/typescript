// generics in ts
// are used to create re-usable component under certain rule

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items); // concat is for joining and T is placeholder which waits data type to be passed
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['cooking', 'sleeping', 'reading'])

//strArray.push(2) // error expect strings
strArray.push('listening');