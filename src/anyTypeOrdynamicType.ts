//variable , any or dynamic type
//working good
let a : any;
a = "karim ";
a = 23;
console.log(a);

//array , any or dynamic type
//working good
let b : any[] = [];
b.push("karim");
b.push(23);
console.log(b);

//object , any or dynamic type
//working good
let c : {
    name : any,
    roll : any,
    def: any,
};
c ={
    name :  "karim",
    roll : "wrong",
    def: "CSE"
}
console.log(c);
