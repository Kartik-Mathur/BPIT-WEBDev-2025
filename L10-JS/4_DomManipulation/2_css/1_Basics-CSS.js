// 3. ELEMENT KI CSS CHANGE KARNA
let hulk = document.querySelector("#hulk");
console.log(hulk)
hulk.classList.add("movie")

let allMovies = document.querySelectorAll('.movie');
allMovies.forEach(m=> {
    m.classList.remove('movie');
    m.classList.add('new-movie'); // style.css mei iska css likha hoga
})

let h = document.getElementById('heading');
// Yaha manually add kar diya: inline css
h.style.backgroundColor = "blue";
h.style.color = 'white'

// 4. ELEMENT KO DELETE KARNA
// h.remove(); // Will delete the element from the page..

