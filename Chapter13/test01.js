function doSomething(callback) {
    callback();
}

function sayHi() {
    console.log("Hi!");
}

doSomething(sayHi);