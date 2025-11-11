// CALL BY VALUE
function sum(a, b) {
    a = 100;
    b = 20;

    return a + b;
}

let x = 10;
let y = 20;

console.log(sum(x, y));

console.log("x", x);
console.log("y", y);