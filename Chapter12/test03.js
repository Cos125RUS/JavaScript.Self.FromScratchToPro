try {
    throw RangeError("Throw Error");
} catch (e) {
    console.log(e.message);
} finally {
    console.log("Finally!");
}
console.log("");


let func = (arg) => {
    if (isNaN(arg)) {
        throw RangeError("Argument must be a number");
    } else {
        console.log(arg, "is a number");
    }
}

try {
    func(12);
    func("dsf");
} catch (e) {
    console.log(e.message);
} 