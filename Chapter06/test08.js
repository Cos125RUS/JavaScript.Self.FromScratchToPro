let f = function (text) {
    console.log(text);
}

setTimeout(f, 1000, "Load...");
setInterval(f, 3000, "Waiting...");