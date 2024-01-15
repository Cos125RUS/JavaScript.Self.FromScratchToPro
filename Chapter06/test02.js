let arr = ["Hi, ", "Hello, ", "What's up, ", "How are you, "];
function greetings(name) {
    console.log(arr[Math.floor(Math.random() *10) % 4] + name);
}

for (let i = 0; i < 10; i++) {
    greetings("Valerii");
}