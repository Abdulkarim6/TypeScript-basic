"use strict";
/**Duplicate identifier is like warning, it's wrong of editor */
class playerClass {
    /*info: by default all property of a class is public.The property value can be accessible
    and changeable from anywhere of the File. for example, name : string; */
    /**can be set the access limitation of properties with access modifire. EX below*/
    // name : string; //by fefault always public a poperty.
    // private country : string; //the property can be access only in playerClass
    // readonly age : number; //the property's value can be read in whole file, but can't changeable. 
    // public isMarried: boolean; //the property's value can be read and change from anywhere of the File.
    /** If we set access modifire for the properties, then we can do it(sortcut rule).
        No need to set value of properties with this.propertyName = inputData*/
    constructor(name, country, age, isMarried) {
        this.name = name;
        this.country = country;
        this.age = age;
        this.isMarried = isMarried;
    }
    ;
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
    ;
}
;
const Masrafee = new playerClass("Masrafee", "Bangladesh", 40, true);
const Sakib = new playerClass("Sakib", "Bangladesh", 30, true);
const arr3 = [];
arr3.push(Masrafee);
arr3.push(Sakib);
for (const player of arr3) {
    //  console.log(`
    //     Player info: Name:${player.name}, 
    //     Coumtry:${player.country}, 
    //     Age:${player.age}. 
    //     Married:${player.isMarried}.
    // `);// show error, country property is private, it not accesseible from here.
    console.log(`Player info: 
                    Name:${player.name},
                    Age:${player.age}. 
                    Married:${player.isMarried}.
     `);
} // prints objects for...of
