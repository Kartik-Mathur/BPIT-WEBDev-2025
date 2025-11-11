// Way-1
var filter = function (arr, fn) {

    let newArr = arr.filter((v, i) => {
        let ans = fn(v, i);
        return ans;
    })

    return newArr;
};

// Way-2
var filter = function (arr, fn) {
    return arr.filter((v, i) => fn(v, i));
};