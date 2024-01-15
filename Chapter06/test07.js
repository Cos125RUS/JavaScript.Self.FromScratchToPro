function func(x) {
    if (x > 1) {
        return x * func(x - 1);
    } else return 1;
}
console.log(func(7));

