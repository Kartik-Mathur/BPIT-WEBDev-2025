setTimeout(() => {
    console.log("SET TIME OUT SAYS HI")
}, 0);

let p = new Promise((resolve, reject) => {
    resolve("PROMISE SAYS HI");
})

p.then(function (msg) {
    console.log(msg);
}).catch((err) => {
    console.log(err)
})

console.log("HELLO");

/*
HELLO
PROMISE SAYS HI
SET TIME OUT SAYS HI
*/