// CALL BY Reference
function sum(arr) {
    arr[0] = 100;
    arr[1] = 200;

    return arr[0] + arr[1];
}

let arr = [1, 2];
console.log(sum(arr));
console.log(arr);

let x = [1, 2, 3];
let z = x; // x and z are same
let y = [1, 2, 3];// y ki values same hai x wali, but these two are different arrays

z[0] = 100;
console.log(x); // z ke through x update hoga
console.log("X before updating z",x);

z = [10,20,30]; // Iska mtlb humne z ko new array de diya ab vo x wali memory
// par point nhi kr rha
console.log("X after updating z",x);
console.log("Z",z)

console.log(x == y); // false, x and y are two different arrays with same value
console.log(x == z); // true, z bhi x wale address par point kr rha hai