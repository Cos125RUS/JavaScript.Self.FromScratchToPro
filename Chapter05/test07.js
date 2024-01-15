let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black"
}
for ( let prop in car ) {
    console.log(prop, car[prop]);
}
console.log();
let keys = Object.keys(car);
for (let key of keys) {
    console.log(key, car[key]);
}
console.log();
let values = Object.values(car);
for (let value of values) {
    console.log(value);
}
console.log();
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i] + ": " + values[i]);
}
console.log();
let set = Object.entries(car);
console.log(set);
for (const [key, value] of Object.entries(car)) {
    console.log(key,": ",value);
}