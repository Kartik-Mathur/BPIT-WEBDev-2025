// API -> Application Programming Interface
let url = 'https://meowfacts.herokuapp.com/?count=4';
let amazonURL = 'https://www.amazon.in/s?k=recliner+sofa+1+seater'

// API Call - AJAX Request
/*

What is AJAX?
- XHR request
- Asynchronous javascript and XML
Bina page ko refresh kiye data user ko dikhana is considered is AJAX

*/
// 1. XML-HTTP request
// 2. Fetch -> most popular
// 3. Axios -> most popular
// 4. jQuery

// Asynchronous task hona chahiye yeh
// 1. Merko data dede
// 2. Ya toh data aaega ya nhi aaega

let xhr = new XMLHttpRequest(); // Yeh object will help us to send request
// Kaha request send karni hai vo set krna padega
xhr.open("GET", url);

// Data aa gaya toh kya krna hai?
xhr.onload = function (response) {
    console.log(response)
    // console.log(response.currentTarget.response);
    let str = response.currentTarget.response;
    let { data } = JSON.parse(str);
    console.log(data)

}
// Request fail ho gai toh kya krna hai
xhr.onerror = function (err) {
    console.log(err);
}

// Request ko send karo
xhr.send();

