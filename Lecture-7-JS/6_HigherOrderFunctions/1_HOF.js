/*
This is a concept that says we can pass functions as arguments and return function
as values. That language supports "higher order functions (HOF)"
*/

function callFun(fn) {
    console.log("Calling Function", fn.toString());
    fn(); // Yeh ek function lega aur usse call krega
}

function helloWorld() {
    console.log("Hello World");
}

// helloWorld: Function pass krna
// helloWorld(): Function ko call krna

callFun(helloWorld); // Function as argument pass krna hai