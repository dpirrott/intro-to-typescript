"use strict";
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
// Tuple
let person = [1, "Dylan", true];
// Tuple array
let employee;
employee = [
    [1, "Dylan"],
    [3, "dfish"],
    [14, "duncan"],
];
// Union
let pid;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "john",
};
// Type Assertion
let cid = 1;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "john",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const dylan = new Person(1, "Dylan Pirrotta");
console.log(dylan);
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, "Dfish", "clerk");
console.log(emp.register());
