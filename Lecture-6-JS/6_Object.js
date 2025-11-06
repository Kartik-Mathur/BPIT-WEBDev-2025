let x = {
    name: 'Vridhi',
    age: 19,
    college: 'BPIT',
    10: "I am ten",
    ' ':"This is my secret",
    '': 'This is empty string'
}

console.log(x)
console.log(x.name);
console.log(x["name"]);
console.log(x[10])

x.subject = "Web";
console.log(x)
// x.' ';
console.log(x[' ']);
console.log(x['']);
for(let k in x){
    console.log(k,':',x[k])
}

