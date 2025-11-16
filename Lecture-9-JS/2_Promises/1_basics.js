// By default p would be pending promise
// resolve is actually fun defined in then
// reject is actually errorFun defined in catch
let p = new Promise(function (resolve, reject) {

});

// Promise poora hone ke baad then wala function chlega
// fail hone ke baad catch wala function chlega
// fun and errorFun has to be defined yet..
//  -- p.then(fun).catch(errorFun)
//  -- p.then(fun, errorFun) // another way to write it