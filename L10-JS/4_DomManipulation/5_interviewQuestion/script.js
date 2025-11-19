// 1 to 10000
// If number % 3 == 0, FIZZ
// If number % 5 == 0, BUZZ
// If number % 15 == 0, FIZZBUZZ
// ELSE print number on the page


// 15
/*
1
2
FIZZ
4
BUZZ
FIZZ
7
8
FIZZ
BUZZ
11
FIZZ
13
14
FIZZBUZZ
*/

let list = document.querySelector('.list');

// Touch the DOM as less as possible...
for (let i = 1; i <= 10000; i++) {
    let str = "";
    if (i % 3 == 0) str = 'Fizz';
    if (i % 5 == 0) str += 'Buzz';

    let li = document.createElement('li');
    if (str == '') {
        li.innerText = i;
        // list.innerHTML+=`<li>${i}</li>`
    }
    else {
        li.innerText = str;
        // list.innerHTML+=`<li>${str}</li>`
    }
    list.appendChild(li);
}






