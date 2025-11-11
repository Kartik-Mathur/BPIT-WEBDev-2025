function sum(a, b) {
    return a + b;
}

// x ka hona ya na hona doesn't matter
let add = function x(a, b) {
    return a + b;
}

// Giving name to the function is optional in the variable way👇🏻
let sub = function (a, b) {
    return a - b;
}

console.log(sum(10, 20));
console.log(add(10, 20));
console.log(sub(10, 5));
// console.log(x(10, 20)); // ReferenceError: x is not defined
