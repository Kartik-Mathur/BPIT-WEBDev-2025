// Variables
// 1. var 
// 2. let 
// 3. const

/*
    // Datatypes in JS (Value ka hota hai datatype)
    1. Number (1, 1.11, 11221.11) "No concept of integer or float"
    2. String ("A", 'A', "Hello", 'World') "No concept of characters"
    3. Array
    4. Objects
    5. Boolean
    6. undefined
    7. Symbol
    8. BigInt
*/
var a;
a = 10;
console.log(a);
// a jisse point kr rha hai uska type kya hai, na ki a ka type bataega..
console.log(typeof (a));

b = "Hello"
console.log(b)
console.log(typeof (b));

a = 'World';
console.log(a)
console.log(typeof (a));

// String literal
// Backticks ke through string bana skte hai
let name = 'Vridhi';
const college = 'BPIT';
// college='MSIT'; // ERROR DEGA YEH
let line = "Hello my name is " + name + ", i am from " + college;
let line2 = `Helloo my naame is ${name}, I am from ${college}`;

console.log(line);
console.log(line2);
line = "Hello";
for (let i = 0; i < line.length; i++) {
    console.log(line[i])
}

line = "World";
// output: W_o_r_l_d
let ans = "";
for (i = 0; i < line.length; i++) {
    ans += line[i] + (i == line.length - 1 ? "" : '_');
}
console.log(ans);