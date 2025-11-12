function genFun() {
    let x = 1;
    function fun() {
        function innerFun() {
            x++;
            console.log(x);
        }

        return innerFun;
    }

    return fun;
}

let f = genFun();
let f1 = f();
let f2 = f();

f1(); // 2
f1(); //3 
f2(); //4 
f2();// 5