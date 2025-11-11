function callFun(fn) {
    // fn: [Function: helloWorld]
    let ans = fn();
    console.log(ans);
}

function helloWorld() {
    return "Hello World";
}

callFun(helloWorld); // Hello World

// callFun(helloWorld()); 