"use strict";
//working good
let developerName = "karim"; //Guesses string type
console.log(developerName); //karim 
//working good
let userName = "karim"; //Guesses string type
userName = "jwel";
console.log(userName); //jwel
//working good
let deveName; //Guesses undefined type
deveName = "jwel";
deveName = 56;
console.log(deveName); //56
//not working
let deName = "karim"; //Guesses string type
// deName = 56;//Type 'number' is not assignable to type 'string'
console.log(deName);
/*explicitly declare type*/
//working good
let userName2;
userName2 = "Habiba";
console.log(userName2); //Habiba
//working good
let userinfo;
userinfo = 56;
console.log(userinfo); //56
//not working
let userinfo2;
userinfo2 = true; //Type 'boolean' is not assignable to type 'string | number'.
console.log(userinfo2); //error
