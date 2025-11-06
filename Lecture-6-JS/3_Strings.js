let x = "Hello World Learning Strings";

console.log(x.indexOf("World"));
/* 
Questions 
let x = "Hello World Learning Strings";
"olleH dlroW gninraeL sgnirtS"
*/
let words = x.split(' ');  // Ek Array bana kar de dega from string
let newStr = ""
for(let i = 0 ; i < words.length ; i++){
    let word = words[i];
    let reversedWord="";
    for(let j = word.length-1 ; j >= 0 ; j--){
        reversedWord += word[j];
    }
    // console.log(word,": ",reversedWord)
    newStr+=reversedWord + (i == words.length ? "":" ");
}
console.log(newStr)