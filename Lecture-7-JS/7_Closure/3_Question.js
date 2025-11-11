function createCart() {
    let cart = [];

    function addToCart() { }

    function removeFromCart() { }

    function emptyCart() { }

    function getCart() { }
}


let c1 = createCart();

c1.addToCart("Laptop");
c1.addToCart("Keyboard");
c1.addToCart("Mouse");

let c2 = createCart();
c2.addToCart("Milk");
c2.addToCart("Coffee");


console.log(c1.getCart());
console.log(c1.emptyCart());
console.log(c1.getCart());