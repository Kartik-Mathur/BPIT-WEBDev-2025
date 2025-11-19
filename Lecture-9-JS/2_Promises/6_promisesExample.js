function getFile(url) {
    return new Promise((res, rej) => {
        // console.log("Get File Shuru");

        setTimeout(() => {
            let arr = url.split('/');
            let fileName = arr.pop();
            // console.log("File Aa gai", fileName);
            res(fileName)
        }, 500);
    })
}

function compressFile(file) {
    return new Promise((res, rej) => {
        // console.log("Compression Shuru");

        setTimeout(() => {
            let arr = file.split('.');
            let compressedFile = arr[0] + '.zip';
            // console.log("Compressed File done", compressedFile)
            res(compressedFile);
        }, 500);
    })
}

function uploadFile(file) {
    return new Promise((res, rej) => {
        // console.log("Uploading Shuru");

        setTimeout(() => {
            let newUrl = 'http://newwebsite.com/' + file;
            // console.log("Uploading Done", newUrl)
            res(newUrl)
        }, 500);
    })
}

getFile('http://randomurl.com/merifile.mp4')
    .then(compressFile)
    .then(uploadFile)
    .then(url => {
        console.log(url)
    })
