function genFun() {
    function hello() {
        console.log("Hello");
    }

    return hello; // hello: Function return kia hai, call nhi kia
}

let fn = genFun();
console.log(fn.toString());
fn();