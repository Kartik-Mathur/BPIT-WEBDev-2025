function fun1(cb) { // cb: fun2
    console.log("Fun1 starts")

    setTimeout(() => {
        console.log("Fun1 ends")
        cb(fun3) // fun2 is being called here
    }, 2000)
}

function fun3(cb) { // fun3 banate time jo uske argument bheja hoga that will be the call back of it
    console.log("Fun3 starts")
    setTimeout(() => {
        console.log("Fun3 ends")
        cb();
    }, 2000)
}

// function fun4() {
//     console.log("fun4 starts")
//     setTimeout(() => {
//         console.log("fun4 ends")
//     }, 2000)
// }


fun1(function fun2(cb) { // fun2 function ko define krte time hi uska argument yaani callback
    // lena padega..
    console.log("Fun2 starts")
    setTimeout(() => {
        console.log("Fun2 ends")
        cb(
            function fun4() {
                console.log("fun4 starts")
                setTimeout(() => {
                    console.log("fun4 ends")
                }, 2000)
            }); // fun3 call hua hai
    }, 2000);
})