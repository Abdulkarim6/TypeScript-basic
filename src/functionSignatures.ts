/**logic 1, return type Function Signatures */
//assign function signatures which is function syntax
//the add function taken "number" via perameter and return a number
//if assign the function, the function should be return type and perameters as number
let add : (x: number, y: number) => number;
//now assinged the function
add = (a:number, b:number) =>{
    return a + b;
};
//called the function
console.log(add(5,25));


/**logic 2, No/void return type Function Signatures */
//assign function signatures which is function syntax
//the add2 function taken "number" via perameter and return a number
//if assign the function, the function should be no return type and perameters as number
//todo info: 
let add2 : (x: number, y: number) => void;
//now assinged the function
add2 = (a:number, b:number) =>{
    console.log(a + b);
};
//called the function
add2(5, 25);


/**logic 3, return type Function Signatures */
let calculation : (x: number, y: number, z:string) => number;
//now assinged the function
calculation = (a:number, b:number, c:string) =>{
    if(c == "add")
        return a + b;
    else if(c == "sub")
        return a- b;
    else 
        return a * b;
};
//called the function
console.log(calculation(2, 3, 'sub'));


