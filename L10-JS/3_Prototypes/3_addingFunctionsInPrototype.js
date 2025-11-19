let person = {
    name: "Tarushi"
}

console.log(person);
person.college = "BPIT"; // This works 
console.log(person);

let s = "hello world";
let arr = s.split(" ");
console.log(arr); // Works because String.prototype ke pass split function h

let n = 10;
// let arr1 = n.split(" "); // Nhi chlega because Number.prototype ke pass split function nhi h

// We can add this 
Number.prototype.split = function(){
    console.log("I am split function in number prototype");
}

n.split();