function createCounter() {
    let count = 0;

    function counter() {
        count++;
        return count;
    }

    return counter;
}

// Closure -> count = 5
let cnt = createCounter()
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());

// Closure -> count = 0
let cnt1 = createCounter()
console.log(cnt1());
// console.log(cnt1());
// console.log(cnt1());
// console.log(cnt1());
// console.log(cnt1());

console.log(cnt());
