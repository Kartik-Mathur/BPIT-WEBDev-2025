function fun1(cb) { // cb: fun2
    console.log("fun1 starts")
    setTimeout(() => {
        console.log("fun1 ends")
        cb(function fun3(cb) {
            console.log("fun3 starts")
            setTimeout(() => {
                console.log("fun3 ends")
                cb(); 
            }, 2000)
        }); // fun2 toh yaha call hua
    }, 2000)
}

// fun1 ke andar ka callback yahi define kar diya
fun1(function fun2(cb) { // cb: fun3
    console.log("fun2 starts")
    setTimeout(() => {
        console.log("fun2 ends")
        cb(function fun4() {
            console.log("fun4 starts")
            setTimeout(() => {
                console.log("fun4 ends")
            }, 2000)
        })
    }, 2000)
})