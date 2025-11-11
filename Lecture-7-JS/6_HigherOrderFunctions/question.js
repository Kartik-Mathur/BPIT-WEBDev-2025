function callFun(fn) {
    fn();
}

function helloWorld() {
    console.log("Hello World");
}

callFun(helloWorld); // Hello World

callFun(helloWorld()); // 