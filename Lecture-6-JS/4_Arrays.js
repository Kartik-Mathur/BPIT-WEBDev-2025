let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.push(7); // insert at end
// console.log(arr)

// // arr[20] = 1000;
// // console.log(arr);

// arr.pop(); // delete at end
// console.log(arr)

// arr.unshift(10) // Insert at front
// console.log(arr)

// arr.shift(); // delete at front
// console.log(arr)

// arr.reverse(); // reverse the array
// console.log(arr)

// let newArr = arr.slice(1,4)
// console.log(newArr)

// Using array to reverse string
let x = "Hello World Learning Strings";
/* 
Questions 
let x = "Hello World Learning Strings";
"olleH dlroW gninraeL sgnirtS"
*/
let words = x.split(' ');  // Ek Array bana kar de dega from string
let newStr = ""

// for(let i = 0 ; i < words.length ; i++){
//     let word = words[i];
//     // console.log(word);
//     word = word.split("");
//     // console.log(word);
//     word = word.reverse();
//     // console.log(word);
//     let reversedWord = word.join("");
//     // console.log(reversedWord);
//     newStr+=reversedWord + (i == words.length ? "":" ");
// }
// console.log(newStr)

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = word.split("").reverse().join("");
    newStr += word + (i == words.length ? "" : " ");
}
console.log(newStr)