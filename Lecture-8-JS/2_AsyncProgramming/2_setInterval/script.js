let counter = 431980;
// let id = setInterval(() => {
//     counter++;
//     let seconds = counter % 60;
//     let minutes = Math.floor((counter / 60) % 60);

//     // 700 seconds, 1 Minute 10 seconds
//     let hours = Math.floor(counter / 3600);
//     console.log(`Hours: ${hours}, Minutes: ${minutes} Seconds : ${seconds}`)
// }, 1000);
let id = setInterval(() => {
    counter++;
    let seconds = counter % 60;
    let minutes = Math.floor((counter / 60) % 60);

    // 700 seconds, 1 Minute 10 seconds
    let hours = Math.floor(counter / 3600) % 24;
    let days = Math.floor(counter / (3600 * 24));
    console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes} Seconds : ${seconds}`)
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 4000);