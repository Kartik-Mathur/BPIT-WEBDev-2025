function getFile(url, cb) { // iska cb -> compressFile
    console.log("Get File Shuru");

    setTimeout(() => {
        let arr = url.split('/');
        let fileName = arr.pop();
        console.log("File Aa gai", fileName);
        cb(fileName, uploadFile); // compressFile ko call kia uska callback -> uploadFile
    }, 3000);
}

function compressFile(file, cb) { // cb-> uploadFile 
    console.log("Compression Shuru");

    setTimeout(() => {
        let arr = file.split('.');
        let compressedFile = arr[0] + '.zip';
        console.log("Compressed File done", compressedFile)
        cb(compressedFile); // Upload file
    }, 3000);
}

function uploadFile(file) {
    console.log("Uploading Shuru");

    setTimeout(() => {
        let newUrl = 'http://newwebsite.com/' + file;
        console.log("Uploading Done", newUrl)
    }, 3000);
}

getFile('http://randomurl.com/merifile.mp4', compressFile);