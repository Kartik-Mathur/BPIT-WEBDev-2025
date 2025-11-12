function nahana(cb) { // Nahane ke baad khana hai, toh cb is khana function
    console.log("Nahana Shuru");

    setTimeout(() => {
        console.log("Nahana Khatam")
        cb(baharJaana); // khane ko call kia
        // khane ke baad baharJaana hai toh khane ka callback is baharJaana
    }, 3000);
}

function khana(cb) { // iska cb is baharJaana
    console.log("khana Shuru");

    setTimeout(() => {
        console.log("khana Khatam")
        cb(); // Khana khatam hone ke baad baharJaana hai call krdo
    }, 3000);
}

function baharJaana() {
    console.log("bahar nikal gaye");

    setTimeout(() => {
        console.log("Vapis aa gaye")
    }, 3000);
}

nahana(khana);