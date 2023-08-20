"use strict";
//tuples
const person3 = {
    name: "Faruk2",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "test"],
};
console.log(person3.role[0] + " : " + person3.role[1]);
person3.role.push("admin");
person3.role[1] = 10;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 3] = "READ_ONLY";
    Role["AUTHOR"] = "author";
})(Role || (Role = {}));
const person4 = {
    name: "Faruk2",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
if (person4.role === Role.ADMIN) {
    console.log("it is admin");
}
//using any
let favouriteActivities;
favouriteActivities = ["Sports", 3, true];
console.log(favouriteActivities[1]);
//union types
function combine(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
function move(distance, direction) {
    // ...
}
move(1, "North"); // Okay
const person8 = {
    name: "Faruk",
    age: 30,
};
console.log(person8.name);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
