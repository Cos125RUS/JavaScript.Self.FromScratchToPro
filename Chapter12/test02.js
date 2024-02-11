let test = function(a,b,c) {
    console.log("1:",a,arguments[0]);
    console.log("2:",b,arguments[1]);
    console.log("3:",c,arguments[2]);
}
test("first", "second", "third");

test = function(a,b,c) {
    a = "zero";
    arguments[2] = "3";
    console.log("1:",a,arguments[0]);
    console.log("2:",b,arguments[1]);
    console.log("3:",c,arguments[2]);
}
test("first", "second", "third");

test = () => {
    let lastOne = null;
    for (let i = 0; i < arguments.length; i++) {
        lastOne = arguments[i];
    }
    return lastOne;
}

console.log(test("first", "second", "third"));