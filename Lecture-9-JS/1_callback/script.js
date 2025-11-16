function fun1(cb) {
    console.log("Fun1 starts")

    setTimeout(() => {
        console.log("Fun1 ends")
        cb(fun3) // fun2
    }, 2000)
}

function fun2(cb) {
    console.log("Fun2 starts")
    setTimeout(() => {
        console.log("Fun2 ends")
        cb(); // fun3 call kia
    }, 2000)
}

function fun3() {
    console.log("Fun3 starts")
    setTimeout(() => {
        console.log("Fun3 ends")
    }, 2000)
}

fun1(fun2);