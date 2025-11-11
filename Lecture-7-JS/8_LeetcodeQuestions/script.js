function isOdd(n) {
    return n % 2 == 1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// LESS VERBOSE
let newArr = arr.filter((val) => isOdd(val));

let newArr1 = arr.filter((val) => {
    let oddHai = isOdd(val);
    if (oddHai == true) return true;
    else return false;
});

console.log(newArr)
