/**
 * TUPLES uses for maintaining order.
 * it used in array. and not to good to push any new value inside the array.
 */
let aaa = ["sakib", 30, {p : "t"}];
aaa[0] = 34; // works fine and does not maintained order, it is bad practice.

let bbb:[string, number, object] = ["mash", 35, {p : "t"}];

// bbb[0] = 34; // show error, Type 'number' is not assignable to type 'string'.
bbb[0] = "tamim";//maintained order at second time change the value of index with explicity type.