"use strict";
//working good and best practice
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); //6
//working good but not best practice
function multiply2(a, b) {
    return a * b;
}
console.log(multiply2(2, 3)); //6
//not working
function multiply3(a, b) {
    return a * b;
}
console.log(multiply3("karim", 3)); //NaN
