/**without type aliases , not best practice*/
//first function
const userDetails = (id : number | string, user:{name : string, age: number}) =>{
    console.log(`user ID: ${id}, name ${user.name}, age: ${user.age}`);
    
}
userDetails(23, {name: 'karim', age: 25});

//second function
const userTag = (user:{name : string, age: number}) =>{
    console.log(`${user.age > 30 ? "sir " : "Mr "} ${user.name}`);
    
}
userTag({name: 'Jwel', age: 25});


/**with type aliases , best practice*/
type userId = number | string; // customly declare type name
type userInfo = {name : string, age: number};
//first function
const userDetails2 = (id : userId, user: userInfo) =>{
    console.log(`user ID: ${id}, name ${user.name}, age: ${user.age}`);
    
}
userDetails2(23, {name: 'karim', age: 25});

//second function
const userTag2 = (user:userInfo) =>{
    console.log(`${user.age > 30 ? "sir " : "Mr "} ${user.name}`);
    
}
userTag2({name: 'Jwel', age: 25});