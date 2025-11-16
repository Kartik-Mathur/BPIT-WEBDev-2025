// p: state-> PENDING
let p = new Promise(function (res, rej) {
    let number = Math.random() * 100; // File upload, algorithm, API-Call, Database interaction
    console.log("Creating a promise p");
    if (number < 50) {
        rej(); // Promise reject ho gaya agar rej call kr diya
        // STATE CHANGES TO -> REJECTED
        console.log("REJECT call hua")
    }
    else {
        res(); // Promise poora hua if we can res
        // STATE CHANGES TO -> FULFILLED
        console.log("RESOLVE call hua")
    }
})

// p.then(function () {
//     console.log("YAAY!!!")
// }).catch(function () {
//     console.log("UGHHHH!!")
// })