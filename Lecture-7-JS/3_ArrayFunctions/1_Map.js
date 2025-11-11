let arr = [1, 2, 3, 4, 5, 6];

// Map ke andar hum ek function pass krte hai
// Function has three arguments: 1. Value of arr, 2. Value ka index, 3. array itself
// let newArr = arr.map(function (val, index, a) {
//     console.log(val, index, a);

//     return val * val; // new array mei har index ke corresponding value ko square kr dena
// });

let newArr = arr.map((val, index, a) => {
    console.log(val, index, a);

    return val * val; // new array mei har index ke corresponding value ko square kr dena
});

console.log(newArr)
console.log(arr);

// Change the array this way:
/*
1. Odd value -> square
2. Even Value -> cube
3. 0 -> "ZERO"
4. 1 -> "One"

Example: 
Input: [1,3,2,4,0]
Output: ["One", 9, 8, 64, "Zero"]
*/

let a = [1, 3, 2, 4, 0];
// let newa = a.map(function (v) {
//     if (v == 0) return "ZERO";
//     else if (v == 1) return "ONE";
//     else if (v % 2 == 0) return v * v * v;
//     else return v * v;
// })

let newa = a.map((v) => {
    if (v == 0) return "ZERO";
    else if (v == 1) return "ONE";
    else if (v % 2 == 0) return v * v * v;
    else return v * v;
})

console.log(newa);