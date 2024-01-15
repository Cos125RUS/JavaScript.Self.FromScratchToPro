let f = (x, y) => x + y;
console.log(f(2, 3));

let arr = [1, 2, 3];
arr.forEach(x => console.log(x));

console.log(f(...arr));

function func(...args) {
    console.log(args);
}

func(1,2,3,4,5,6,7,8);