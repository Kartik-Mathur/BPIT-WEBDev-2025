let form = document.querySelector('form');
let countInp = document.querySelector('#count');

function getUrl(count) {
    return `https://meowfacts.herokuapp.com/?count=${count}`
}

function updateCatFactsList(data) {
    let catFactList = document.querySelector('.catFactList');
    catFactList.innerText = '';
    data.forEach(d => {
        let li = document.createElement('li');
        li.innerText = d;
        catFactList.appendChild(li);
    })
}

function fetchFacts(count) {
    return new Promise((resolve, reject) => {
        if (!count) {
            reject("Please provide count value to proceed")
            return;
        }

        let url = getUrl(count);
        fetch(url)
            .then(response => response.json())
            .then(({ data }) => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            })
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetchFacts(countInp.value)
        .then(updateCatFactsList)
        .catch(err => {
            alert(err);
        })
})