"use strict";
class player {
    constructor(n, c, a) {
        this.name = n;
        this.country = c;
        this.age = a;
    }
    ;
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
    ;
}
;
const masrafee = new player("Masrafee", "Bangladesh", 40);
const sakib = new player("Sakib", "Bangladesh", 30);
// masrafee.play(); 
// sakib.play();
const arr = []; //string of array demo
const arr2 = []; //type(player) of array, player is an custom type.
arr2.push(masrafee); // only can push the object, which is created by player class.  
arr2.push(sakib); // only can push the object, which is created by player class.  
// arr2.push(rakib);// occured error, because the rakib is created by player class.  
// arr2.map(it => console.log(it));// prints objects using map
// for(let i = 0; i < arr2.length; i++){
//     console.log(`Player info: Name:${arr2[i].name}, Coumtry:${arr2[i].country}, Age:${arr2[i].age}.`);
// }// prints objects for loop
for (const player of arr2) {
    console.log(`Player info: Name:${player.name}, Coumtry:${player.country}, Age:${player.age}.`);
} // prints objects for...of
