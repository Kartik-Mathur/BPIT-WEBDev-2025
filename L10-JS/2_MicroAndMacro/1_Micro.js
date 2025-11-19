// MACRO TASK QUEUE: SETTIMEOUT/SETINTERVAL
// MICRO TASK QUEUE: PROMISE

let p = new Promise((resolve, reject) => {
    resolve("OK");
})

p.then(function (msg) {
    console.log(msg);
}).catch((err) => {
    console.log(err)
})

console.log("HELLO");
let start = new Date().getTime();
while (new Date().getTime() - start <= 2000) {

}

// OUTPUT:
/*
HELLO
OK
*/