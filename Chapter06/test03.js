function calc(x, y, operand) {
    switch (operand) {
        case "+":
            console.log(`${x} + ${y} = ${x + y}`);
            break;
        case "-":
            console.log(`${x} - ${y} = ${x - y}`);
            break;
        case "*":
            console.log(`${x} * ${y} = ${x * y}`);
            break;
        case "/":
            console.log(`${x} / ${y} = ${x / y}`);
            break;
        case "**":
            console.log(`${x} ** ${y} = ${x ** y}`);
            break;
        case "%":
            console.log(`${x} % ${y} = ${x % y}`);
            break;
        default:
            console.log("Error");
    }
}

calc(2, 3, "+");
calc(7, 3, "-");
calc(2, 3, "*");
calc(9, 3, "/");
calc(2, 3, "**");
calc(7, 3, "%");
calc(2, 3, "$");