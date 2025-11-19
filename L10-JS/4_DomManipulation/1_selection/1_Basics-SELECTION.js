// console.log(document)

// 1. HTML ELEMENT SELECT KARNA
// heading ka actual reference hoga page ka
// let h = document.getElementById('heading');

// This will return HTML-Collection
// Saare movie ke elements aa jaenge yaha, change them HTML on page will change too
let movies = document.getElementsByClassName('movie');
// console.log(movies);
// movies.forEach(m=> console.log(m)) // HTMLCOLLECTION PAR THIS THING DOESNT WORK

// ELEMENT SELECTION VIA -> querySelector
let firstMovieWithMovieClass = document.querySelector('.movie');
let allMoviesWithMovieClass = document.querySelectorAll('.movie');
// allMoviesWithMovieClass.forEach(m => console.log(m)) // NODELIST par this works..
// console.log(firstMovieWithMovieClass)
// console.log(allMoviesWithMovieClass)

let movieList = document.querySelector('.movieList');
// console.log(movieList.childNodes)

// 2. ELEMENT KE ANDAR KE CONTENT/ELEMENTS KO ACCESS KRNA
// innerText, innerHTML
let h = document.getElementById('heading');
// console.log(h.innerText)
// console.log(h.innerHTML)

// ADDING SOME TEXT INTO HEADING ELEMENT
// h.innerText += 'RANDOM TEXT'
// h.innerText += '<h1>RANDOM TEXT</h1>'
// h.innerHTML += '<h1>RANDOM TEXT</h1>'

// INPUT BOX HAI USKE ANDAR WE USE 'value' instead of innerText or innerHTML
let inp = document.getElementById('inp');

console.log(inp.value)
inp.value = 'Heyyyyy!!'