/*
*Generics allow you to write flexible, reusable, and type-safe code in TypeScript. Instead of 
 using any, which removes type checking, generics let you define a placeholder for a type that 
 will be specified later.

*Generics in TypeScript provide a way to create reusable components while maintaining strong 
 type safety. They are essential for building scalable applications with predictable behavior.

*<T> is type represantive
*/

//Example : 1
const func = <T extends {
    name:string,
    age:number,
}
>(obj : T)=>{
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
}

let playerInfo = func({
    name:"mash",
    age:36,
    role:"captain",
});
console.log(playerInfo);


// Example:2 [array with generics]
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]); // number
const firstString = getFirstElement<string>(["a", "b"]); // string

// Example:3 [class with generics]
class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");


// Example:4 [Constraint with generics]
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello");     // ✅ string has length
logLength([1, 2, 3]);   // ✅ array has length
// logLength(123);      // ❌ Error: number has no length



// Example:4 [interface with generics]
interface ResAPI<T>{ //captured type dynamically
    status: number;
    type: boolean;
    data: T;
    data2: T;
}

//can be pass any type data with specifiedly telling
const response: ResAPI<object | string> = {
    status : 200,
    type : true,
    data : {
        data : "test",
        id : 23,
    },
    data2: "success"
}

console.log(response);