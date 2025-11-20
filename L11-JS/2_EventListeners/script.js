let btn = document.querySelector('button');

// Mouse events
// btn.onclick = function (e) {
//     // console.log(e)
//     console.log("Button Clicked");
// }

// btn.onclick = function (e) {
//     // console.log(e)
//     console.log("Button Clicked - 1");
// }

// btn.ondblclick = function (e) {
//     console.log("dbl clicked");
// }

// btn.addEventListener('click', (e) => {
//     console.log("Clicked");
// })

btn.addEventListener('click', (e) => {
    console.log("Clicked-1");
})

// Input Element Events
// let div = document.querySelector('.box');
// div.addEventListener('mouseenter', (e) => {
//     console.log("Mouse entered");
// })

// div.addEventListener('mouseleave', (e) => {
//     console.log("Mouse leave");
// })

// div.addEventListener('click', (e) => {
//     console.log(e.clientX);
//     console.log(e.clientY);
// })

// Key press events
let inp = document.querySelector('input');
inp.addEventListener('keydown', (e) => {
    console.log(e.target)
    console.log("Key is down");
})

inp.addEventListener('keyup', (e) => {
    console.log(e.target)
    console.log("Key is up");
})

window.addEventListener('keypress', (e) => {
    console.log(e.key)
})

// Form events
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // By default form tag ka behaviour is to send request and refresh the page
    // To prevent that we use this function
    console.log("Form Submit");
    let count = document.querySelector('#count');

    fetch(`https://meowfacts.herokuapp.com?count=${count.value}`)
        .then(response => response.json())
        .then(({ data }) => {
            // console.log(data)
            // data.forEach(d => console.log(d))
            let catFactList = document.querySelector('.catFactList');
            catFactList.innerText = '';
            data.forEach(d => {
                let li = document.createElement('li');
                li.innerText = d;
                catFactList.appendChild(li);
            })
        })
        .catch(err => {
            console.log(err);
        })
})