function getFile(url) {
    console.log("Get File Shuru");

    setTimeout(() => {
        console.log("File Aa gai")
    }, 3000);
}

function compressFile(file) {
    console.log("Compression Shuru");

    setTimeout(() => {
        console.log("Compressed File done")
    }, 3000);
}

function uploadFile(file) {
    console.log("Uploading Shuru");

    setTimeout(() => {
        console.log("Uploading Done")
    }, 3000);
}

getFile('http://randomurl.com/merifile.mp4');