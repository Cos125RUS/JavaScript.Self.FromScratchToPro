cart = ["Milk", "Bread", "Apples"];
cart.splice(1, 1, "Bananas", "Eggs");
console.log(cart.pop());
cart.sort();
console.log(cart);
console.log(cart.indexOf("Milk"));
cart.splice(cart.indexOf("Bananas") + 1, 0, "Carrots", "Lettuce");
console.log(cart);
cart2 = ["Juice", "Pop"];
cart = cart.concat(cart2, cart2);
console.log(cart);
let last = cart.lastIndexOf("Pop");
console.log(last);