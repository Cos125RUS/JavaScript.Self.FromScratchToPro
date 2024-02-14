function greet(fullName) {
    if (Array.isArray(fullName)) {
        console.log("Hello,", fullName.join(" "));
    }
}

function func (fullName, callback) {
    const arr = fullName.split(" ");
    callback(arr);
}

func("Valerii Panov", greet);