// Ek function ke poore hone ke baad doosre function ko call krna 
// ASYNC TASKS KO SEQUENTIALLY RUN KRNA HO
// We can use CallBack
function nahana(cb) {
    console.log("Nahana Shuru");

    setTimeout(() => {
        console.log("Nahana Khatam")
        cb(); // Khana function ko call kr diya
    }, 3000);
}

function khana() {
    console.log("khana Shuru");

    setTimeout(() => {
        console.log("khana Khatam")
    }, 3000);
}

// khana is passed as callback to function nahana
nahana(khana);