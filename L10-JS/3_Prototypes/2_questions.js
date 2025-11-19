let a = 1;
let s = "hello";
let b = true;
let arr = [1, 2, 3, 4];
let obj = {
    name: "Kartik"
}

console.log(a.__proto__ == Number.prototype);
console.log(a.__proto__.__proto__ == Object.prototype);
console.log(a.__proto__.__proto__.__proto__ == null);


console.log(Number.prototype.constructor == Number);

