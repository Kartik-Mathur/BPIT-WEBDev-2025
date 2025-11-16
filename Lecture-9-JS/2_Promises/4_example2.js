function fun1() {
    return new Promise((res, rej) => {
        console.log("Fun1 starts")

        setTimeout(() => {
            console.log("Fun1 ends")
            res();
        }, 2000)
    })
}

function fun2() {
    return new Promise((res, rej) => {
        console.log("Fun2 starts")
        setTimeout(() => {
            console.log("Fun2 ends")
            res();
            // rej("YEH FUN2 Ka error hai")
        }, 2000)
    })
}


function fun3() {
    return new Promise((res, rej) => {
        console.log("fun3 starts")
        setTimeout(() => {
            console.log("fun3 ends")
            res();
        }, 2000)
    })
}

function fun4() {
    return new Promise((res, rej) => {
        console.log("fun4 starts")
        setTimeout(() => {
            console.log("fun4 ends")
            res();
        }, 2000)
    })
}

function fun5() {
    return new Promise((res, rej) => {
        console.log("fun5 starts")
        setTimeout(() => {
            console.log("fun5 ends")
            res();
        }, 2000)
    })
}

fun1()
    .then(fun2)
    .then(fun3)
    .then(fun4)
    .then(fun5)
    .catch(err => {
        console.log(err)
    })

// fun1()
//     .then(() => {
//         return fun2()
//     })
//     .then(() => {
//         return fun3()
//     })
//     .catch((error) => {
//         console.log("ERROR", error)
//     })

/*
fun1()
    .then(() => {
        fun2()
            .then(() => {
                fun3()
            })
    })
    .catch((error) => {
        console.log("ERROR", error)
    })
*/