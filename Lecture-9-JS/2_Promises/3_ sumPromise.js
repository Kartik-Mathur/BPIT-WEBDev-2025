/*
// SYNCHRONOUS SUM NIKALNE KA TARIKA
function sum(a, b) {
    return a + b;
}

console.log(sum(10,20));
*/

// Finding Sum Async way
/*
// INCORRECT WAY OF FINDING SUM ASYNC WAY
function sum(a, b) {
    console.log("Running SUM FUNCTION")
    setTimeout(() => {
        console.log("AB SUM AAYA",a+b);
        return a + b;
    }, 1000);

    console.log("RETURNING FROM SUM FUN");
}

console.log("SUM", sum(10, 20))
*/

// CALL BACK WAY
/*
function sum(a, b, cb) {
    console.log("Running SUM FUNCTION")
    setTimeout(() => {
        console.log("AB SUM AAYA", a + b);
        // Callback function mei sum pass kardo
        cb(a + b);
    }, 1000);

    console.log("RETURNING FROM SUM FUN");
}

// sum function ke andar callback pass kia h,
// simply means ki sum aane ke baad yeh callback function chlega 
sum(10, 20, function (ans) {
    console.log("SUM", ans);
})
*/

// PROMISE WAY -> We need to convert this function to a promise function
function sum(a, b) {
    return new Promise((res, rej) => {
        console.log("Running SUM FUNCTION")
        setTimeout(() => {
            if (!a || !b) {
                rej("DONO NUMBER DIYE BINA SUM NHI AAEGA")
            }
            else {
                res(a + b);
            }
        }, 1000);

        console.log("RETURNING FROM SUM FUN");
    })
}

sum(10)
    .then(function (ans) {
        console.log("PROMISE SUM", ans)
    })
    .catch(function (error) {
        console.log(error)
    })