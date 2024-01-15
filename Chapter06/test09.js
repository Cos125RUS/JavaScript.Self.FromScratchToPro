let f1 = () => console.log("One");
let f2 = () => console.log("Two");
let f3 = () => {
    console.log("Three");
    f1();
    f2();
}
let f4 = () => {
    console.log("Four");
    setTimeout(f1);
    f3();
}

f4();