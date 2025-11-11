// We can return Objects from functions 
function createPerson(name, age, college) {
    let newPerson = {
        "name": name,
        "age": age,
        "college": college
    }

    return newPerson;
}


let p1 = createPerson("Tarushi", 19, "BPIT");
console.log(p1.name);
console.log(p1.college);
console.log(p1.age);
console.log(p1);