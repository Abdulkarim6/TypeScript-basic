"use strict";
/**without type aliases , not best practice*/
//first function
const userDetails = (id, user) => {
    console.log(`user ID: ${id}, name ${user.name}, age: ${user.age}`);
};
userDetails(23, { name: 'karim', age: 25 });
//second function
const userTag = (user) => {
    console.log(`${user.age > 30 ? "sir " : "Mr "} ${user.name}`);
};
userTag({ name: 'Jwel', age: 25 });
//first function
const userDetails2 = (id, user) => {
    console.log(`user ID: ${id}, name ${user.name}, age: ${user.age}`);
};
userDetails2(23, { name: 'karim', age: 25 });
//second function
const userTag2 = (user) => {
    console.log(`${user.age > 30 ? "sir " : "Mr "} ${user.name}`);
};
userTag2({ name: 'Jwel', age: 25 });
