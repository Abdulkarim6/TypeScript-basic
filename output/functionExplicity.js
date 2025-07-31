"use strict";
//not working
let sumFunc1;
// sumFunc1="karim";//error, sumFunc1 type is function
//working good
let sumFunc2;
sumFunc2 = () => {
};
//working good
const sumFunc = (a, b) => {
    console.log(a + b); //12
};
sumFunc(6, 6);
//working good
const sumFunc3 = (a, b, c = 0) => {
    console.log(a + b + c); //20
};
sumFunc3(6, 6, 8);
//not working
const sumFunc4 = (a, b, c = 0) => {
    console.log(a + b + c);
};
// sumFunc4(6, 6, "8");//show error, expect number all perameter
/*Return Type*/
//working good
const sumFunc5 = (a, b, c = 0) => {
    return a + b + c;
};
let result = sumFunc5(11, 6, 8);
console.log(result); //25
//not working 
// const sumFunc6 = (a:number, b:number, c:number = 0) : string => {
//     return a + b + c; // Type 'number' is not assignable to type 'string'.
// };
// let result6 = sumFunc6(11, 6, 8);
// console.log(result6);//error
//not working
// const sumFunc7 = (a:number, b:number, c:number = 0) : number => {
//     return a + b + c;
// };
// let result7 = sumFunc7("11", 6, 8);//Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(result7);//error
