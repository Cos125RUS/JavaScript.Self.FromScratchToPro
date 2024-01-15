let random = function () { return Math.floor(Math.random() * 10) % 6; }
let num = random();
let choice = random();
while (choice != num) {
    console.log(`Your choice ${choice} not win. Try again.`);
    choice = random();
}
console.log(`Win! number is ${num} and choice is ${choice}`);