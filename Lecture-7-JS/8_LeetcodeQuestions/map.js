let arr = [1, 2, 3, 4, 5, 6];

function mul(a, b) {
    return a * b;
}

let newArr = arr.map((v, i) => mul(v, i));
let newArr1 = arr.map((v, i) => {
    let ans = mul(v, i);
    return ans;
});

console.log(newArr)
console.log(newArr1)