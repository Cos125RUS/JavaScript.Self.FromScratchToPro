let car = {
    make: "Lada",
    model: "Priora",
    color: "red",
    forSale: true
}

let variant = "color";
car[variant] = "blue";
variant = "forSale";
car[variant] = false;
console.log(car);