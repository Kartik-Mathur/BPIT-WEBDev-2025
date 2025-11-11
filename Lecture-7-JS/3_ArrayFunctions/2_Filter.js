let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = arr.filter(function (v, i, a) {
//     if (v % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// let newArr = arr.filter((v, i, a) => {
//     console.log(v, i, a);
//     if (v % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })
arr = arr.filter((v, i, a) => {
    // console.log(v, i, a);
    if (v % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
})

// console.log(newArr);
console.log(arr)