var options = ["rock", "paper", "scissors"];

let random = function () { 
    return Math.floor(Math.random() * 10) % 3; 
}

let human = random();
let computer = random();

console.log(`${options[human]} vs ${options[computer]}`);

if (human == computer) {
    console.log("draw");
} else if (human > computer && !(human == 2 && computer == 0)) {
    console.log("human win");
} else {
    console.log("computer win");
}