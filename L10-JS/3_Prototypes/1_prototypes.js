let a = 1;
let s = "hello";
let b = true;
let arr = [1, 2, 3, 4];
let obj = {
    name: "Kartik"
}

// console.log("a.__proto__ == Number.prototype : ", a.__proto__ == Number.prototype);
// console.log("s.__proto__ == String.prototype : ", s.__proto__ == String.prototype);
// console.log("b.__proto__ == Boolean.prototype : ", b.__proto__ == Boolean.prototype);
// console.log("arr.__proto__ == Array.prototype : ", arr.__proto__ == Array.prototype);
// console.log("obj.__proto__ == Object.prototype : ", obj.__proto__ == Object.prototype);


// HAR PROTOTYPE AGAR HELP KRTA HAI TO CREATE THAT VARIABLE, it must contain constructor function
// In js everything is an object including functions

let person = {
    name: 'ABC',
    age: 10
}

console.log(person.name);

function sayHello() {
    console.log("Hello");
}

sayHello.secret = "This is secret of sayHello Function";
sayHello();

console.log(sayHello.secret)
