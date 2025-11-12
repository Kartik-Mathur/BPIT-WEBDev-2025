// 1. Merko 5 second ka delay dena hai

// new Date().getTime() // Yeh time deta hai
// milliseconds mei from 1 Jan 1970

// 1 second == 1000 milliseconds
function delayASec() {
    let start_time = new Date().getTime();
    while (new Date().getTime() - start_time < 1000) {

    }
}

let n = 1;
for(let i = 1 ; i <= n ; i++){
    delayASec();
}

console.log("Now delay of 5 sec is over");