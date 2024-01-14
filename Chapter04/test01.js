let age = Number(prompt("Enter your age: "));
if (age < 3) {
    console.log("Enter is free");
} else if (age < 12) {
    console.log("5 dollars for ticket");
} else if (age <65) {
    console.log("10 dollars for ticket");
} else if (age >= 65) {
    console.log("7 dollars for ticket");
}