"use strict";
const person = {
    name: "Faruk",
    age: 30,
};
console.log(person.name);
const person1 = {
    name: "Faruk2",
    age: 30,
};
console.log(person1.name);
const airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 1452125,
        roots: ["LA", "NY"],
    },
};
console.log(airplane.model +
    " : " +
    " " +
    airplane.caterer.address +
    " : " +
    airplane.caterer.roots[1]);
for (const root of airplane.caterer.roots) {
    console.log("Roots : " + root.toLowerCase());
}
