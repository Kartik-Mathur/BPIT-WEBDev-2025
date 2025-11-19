// 1. Pending
// 2. Full Fill
// 3. Rejected

let p = new Promise((resolve, reject) => {
    resolve("OK");
    // setTimeout(() => {
    //     resolve("OK");
    // }, 1000);
})

p.then(function (msg) {
    console.log(msg);
}).catch((err) => {
    console.log(err)
})

console.log("HELLO");