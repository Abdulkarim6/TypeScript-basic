//working good
let userInfo = {
    name : "Abdul Karim",
    roll : 23,
    isStudent : true,
};
userInfo.name = "Jwel";
console.log(userInfo);

//working good
const isStudent = true;
let userInfo3 = {
    name : "Abdul Karim",
    roll : 23,
    isStudent,
};
userInfo3.isStudent = false;
console.log(userInfo3);

//not working
let userInfo2 = {
    name : "Abdul Karim",
    roll : 23,
    isStudent : true,
};
// userInfo2.name = 25;//Type 'number' is not assignable to type 'string'
console.log(userInfo2);



/*explicitly declare type*/
//working good
let user : {
    name : string,
    roll : number,
    isStudent : boolean,
}
user = {
    name : "Tafcin",
    roll : 28,
    isStudent : true,
}
console.log(user);//{name: 'Tafcin', roll: 28, isStudent: true}

//not workin good
let user2 : {
    name : string,
    roll : number,
    isStudent : boolean,
}
user2 = {
    // name : 45,//Type 'number' is not assignable to type 'string'
    name : "Tafcin",
    roll : 28,
    isStudent : true,
}
console.log(user2);//if name : 45, then given error


//working good
let user3 : {}
user3 = [1,2,3,4]// is js, array is object
console.log(user3);//.[1,2,3,4]

//working good
let user4 : {
    name : string,
    roll : number,
    isStudent : boolean,
}
user4 = [1,2,3,4]
console.log(user4);//error


