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
let catFactList = document.getElementById('catFactList');
setTimeout(() => {
    axios.get(url)
        .then(({ data: { data } }) => {
            data.forEach(d => {
                // console.log(d)
                let li = document.createElement('li');
                li.innerText = d;
                catFactList.appendChild(li);
            })
        })
        .catch(err => {
            console.log(err)
        })
}, 3000);