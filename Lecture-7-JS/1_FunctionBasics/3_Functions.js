function sum(a, b) {
    return a + b; // I can return a Number
}

function createPerson(name, age, college) {
    let newPerson = {
        "name": name,
        "age": age,
        "college": college
    }

    return newPerson; // I can return an Object
}

function sayHello(name) {
    return "Hello" + name; // I can return a string
}

/*
Datatypes:
    Array, Object, String, Number, BigInt, Boolean, Function, undefined
    We can return all this data from functions..
*/

console.log(typeof (1));
console.log(typeof ("Hello"));
console.log(typeof (true));
console.log(typeof ([1, 2, 3]));
console.log(typeof ({ a: 1, b: 2 }));

// Function bhi toh ek datatype hi hai, just like others it can be stored in a 
// variable too...
let a = 1;
let b = "hello";
let c = true;
let d = function () {
    console.log("I am a function");
}

d(); // Function can be called with variable d now...