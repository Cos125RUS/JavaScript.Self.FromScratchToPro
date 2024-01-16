let arr = [1,2,3,4,5];
console.log(arr.filter(x => x%2 == 0));
console.log(arr.copyWithin(0,3,5));
console.log(arr.map(x => x * 2));
console.log(arr.lastIndexOf(4));
console.log(arr.filter((value, index) => arr.indexOf(value) == index));