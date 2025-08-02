class playerClass {
    constructor(n, c, a, m) {
        this.name = n;
        this.country = c;
        this.age = a;
        this.isMarried = m;
    }
    ;
    getProperties() {
        return this.country;
    }
    /** If we set access modifire for the properties, then we can do it(sortcut rule).
        No need to set value of properties with this.propertyName = inputData*/
    // constructor(public name : string, private country : string, readonly age : number, public isMarried: boolean){};
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
    ;
}
;
const Masrafee = new playerClass("Masrafee", "Bangladesh", 40, true);
let Sakib;
Sakib = new playerClass("Sakib", "Bangladesh", 30, true);
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
export {};
