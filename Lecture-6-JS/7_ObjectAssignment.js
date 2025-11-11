let arr = [
    'http://course.com/cpp',
    'http://course.com/java',
    'http://course.com/web',
    'http://course.com/python',
    'http://mentor.com/kartik',
    'http://mentor.com/monu',
    'http://mentor.com/mosina',
    'http://student.com/vridhi',
    'http://sports.com/kabaddi',
    'http://sports.com/hockey',
    'http://sports.com/cricket',
]

/* 
{
    course: [cpp, java, web, python],
    mentor: [kartik, monu, mosinaa],
    student: [vridhi]
}
*/

let obj = {};

for (let url of arr) {
    let newArr = url.split('/');
    let value = newArr.pop();
    let key = newArr.pop().split('.').shift();

    if(!obj[key]) obj[key] = [];
    
    obj[key].push(value);
}

console.log(obj)