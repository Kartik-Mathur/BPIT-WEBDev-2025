let p = new Promise((res, rej) => {
    res("SUCCESS");
})

p.then(function (msg) {
    console.log(msg);
    return "Hello"; // A promise always returns a promise....
}).then(function(msg){
    console.log(msg);
    return "World" // A promise always returns a promise....
})
.then((msg)=>{
    console.log(msg);
})
