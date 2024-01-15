function func() {
    g = "global";
    if (true) {
        let x = "local";
        var y = "local";
    }
    // console.log(x); 
    console.log(y);

    console.log(z);
    var z = "local";
}

func();
console.log(g);

(function func() {
    console.log("IIFE!");
})();

(() => console.log("Arrow IIFE!"))();