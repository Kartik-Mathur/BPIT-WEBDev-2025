// NEW ELEMENT KO ADD KARNA
// 1. Create a new HTML element
let ul = document.createElement('ul');
console.log(ul)

// 2. Update the attributes
ul.classList.add('movieList');
console.log(ul)

// 3. Add some text inside ul
ul.innerText = 'Hi I am ul';

// 4. I want to add this element inside the body
let body = document.querySelector('body');
console.log(body)

// 5. Append the ul into the body
body.appendChild(ul);