"use strict";
//working good
let fruits = ['apple', 'banana', 'orange'];
fruits.push("mango");
console.log(fruits);
//working good
let fruits2 = ['apple', 'banana', 'orange', 45, {}];
fruits2.push(67);
console.log(fruits2);
//not working
let fruits3 = ['apple', 'banana', 'orange',];
// fruits3.push(67);//Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(fruits3); //error
/*explicitly declare type*/
//working good
let fruits4 = [];
fruits4.push('karim');
console.log(fruits4); //[karim]
//working good
let fruits5 = [];
fruits5.push(56);
console.log(fruits5); //[56]
//not working
let fruits6 = [];
// fruits6.push(56); //Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(fruits6); //error
//not working
let fruits7 = [];
// fruits7.push("56"); //Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(fruits7); //error
// working good 
let fruits8 = []; //union type
fruits8.push("56");
console.log(fruits8); //["56"]
// working good
let fruits9 = [];
fruits9.push(56);
console.log(fruits9); //[56]
