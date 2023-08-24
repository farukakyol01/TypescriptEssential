var add4;
add4 = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Faruk");
user1.greet("Hi There - I am ");
//user1.name=3;
console.log(user1);
