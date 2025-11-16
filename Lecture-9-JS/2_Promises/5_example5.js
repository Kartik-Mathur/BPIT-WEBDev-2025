/**
 function getNumbers() {
    // Will return 2 numbers
    // return 10,20
}

function addNumbers(a, b) {
    // Will add two numbers
    // return a+b;
}

function printAns(ans) {
    // Will print two numbers
    // console.log(ans)
}
 */
function getNumbers() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                no1: 10,
                no2: 20
            });
        }, 1500);
    })
}

function addNumbers(data) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let a = data.no1;
            let b = data.no2;
            res(a + b);
        }, 1500);
    })
}

function printAns(ans) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("ANS", ans)
            res("ALL TASK COMPLETED")
        }, 1500);
    })
}

getNumbers()
    .then(addNumbers)
    .then(printAns)
    .then(msg => {
        console.log(msg);
    })

/*
getNumbers()
    .then((data) => {
        let no1 = data.no1;
        let no2 = data.no2;
        console.log("Two Numbers are", no1, no2);

        return addNumbers(no1, no2);
    })
    .then((sum) => {
        return printAns(sum)
    })
    .then(msg => {
        console.log(msg);
    })
*/

let arr = [1, 5, 4, 3, 6, 7, 8];
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort(arr));

function waitFor(seconds) {
    const start = new Date().getTime();
    let current = start;

    while (current - start < seconds * 1000) {
        current = new Date().getTime();
    }
}

console.log('Start waiting...');
waitFor(10); // Wait for 10 seconds
console.log('Waited for 10 seconds!');