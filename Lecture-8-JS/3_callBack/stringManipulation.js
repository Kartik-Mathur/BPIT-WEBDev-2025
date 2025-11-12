let url = 'http://randomurl.com/merifile.mp4';

let arr = url.split('/');
console.log(arr);

let fileName = arr.pop();
console.log(fileName)

arr = fileName.split('.');
console.log(arr);

let compressedFile = arr[0]+'.zip';
console.log(compressedFile)

let newUrl = 'http://newwebsite.com/'+compressedFile;
console.log(newUrl)