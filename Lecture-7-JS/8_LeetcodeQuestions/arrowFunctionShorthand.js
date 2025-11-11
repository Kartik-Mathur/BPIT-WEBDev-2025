let sum = (a, b) => {
    return a + b;
}

// Syntax:
/*
    (a,b)=>a*b; // by default return hoga product of two numbers...
    (a,b)=>a+b; // by default return hoga sum of two numbers...
    (a,b)=>a/b; // by default return hoga division of two numbers...

    (a,b)=>{
        return a+b;
    }
    
    (a,b)=>{
        return a*b;
    }        

    (a,b)=>{
        return a/b;
    }    
*/
let add = (a, b) => a + b; // By default without curly bracket single statement
// is a return statement only

console.log(add(10, 20));
console.log(sum(110, 20));