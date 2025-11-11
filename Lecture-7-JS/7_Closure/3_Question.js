function createCart() {
    let cart = [];

    function addToCart(item) {
        cart.push(item);
    }

    function removeFromCart(item) {
        cart = cart.filter((c) => {
            return c != item;
            // if (c != item) {
            //     return true;
            // }
            // else {
            //     return false;
            // }
        })
    }

    function emptyCart() {
        cart = [];
    }

    function getCart() {
        return cart;
    }

    return {
        "addToCart": addToCart,
        "removeFromCart": removeFromCart,
        "emptyCart": emptyCart,
        "getCart": getCart
    }
}

// Closure -> cart = [];
let c1 = {
    "addToCart": addToCart,
    "removeFromCart": removeFromCart,
    "emptyCart": emptyCart,
    "getCart": getCart
};

c1.addToCart("Laptop");
c1.addToCart("Keyboard");
c1.addToCart("Mouse");

// Closure -> cart = [];
let c2 = createCart();
c2.addToCart("Milk");
c2.addToCart("Coffee");


console.log(c1.getCart());
c1.emptyCart();
console.log(c1.getCart());

console.log(c2.getCart());