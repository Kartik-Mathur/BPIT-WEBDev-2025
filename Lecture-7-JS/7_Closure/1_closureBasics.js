/*
Closure: Function apne parent scope ke data ko saath mei lekar jaata hai
aur jis object ke andar yeh parent ka data jaata hai that is anonymous object
called as closure
*/
function fun() {
    var x = 1;

    function innerFun() {
        console.log(x);
    }

    return innerFun;
}


let f = fun();

f();