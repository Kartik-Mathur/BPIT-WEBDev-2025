let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 1 complete")
    }, 1000);
})

let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 2 complete")
    }, 500);
})

let p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 3 complete")
    }, 1000);
})

// Promise.race([p1, p2, p3])
//     .then(msg => {
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log(err)
//     })

Promise.all([p1, p2, p3])
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err)
    })