"use strict";
/*
*Generics allow you to write flexible, reusable, and type-safe code in TypeScript. Instead of
 using any, which removes type checking, generics let you define a placeholder for a type that
 will be specified later.

*Generics in TypeScript provide a way to create reusable components while maintaining strong
 type safety. They are essential for building scalable applications with predictable behavior.

*<T> is type represantive
*/
//Example : 1
const func = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let playerInfo = func({
    name: "mash",
    age: 36,
    role: "captain",
});
console.log(playerInfo);
// Example:2 [array with generics]
function getFirstElement(arr) {
    return arr[0];
}
const firstNumber = getFirstElement([1, 2, 3]); // number
const firstString = getFirstElement(["a", "b"]); // string
// Example:3 [class with generics]
class Box {
    constructor(value) {
        this.content = value;
    }
}
const numberBox = new Box(123);
const stringBox = new Box("Hello");
// Example:4 [Constraint with generics]
function logLength(item) {
    console.log(item.length);
}
logLength("Hello"); // ✅ string has length
logLength([1, 2, 3]); // ✅ array has length
//can be pass any type data with specifiedly telling
const response = {
    status: 200,
    type: true,
    data: {
        data: "test",
        id: 23,
    },
    data2: "success"
};
console.log(response);
