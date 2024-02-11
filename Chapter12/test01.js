let text1 = "I love JavaScript";
let text2 = "I love Node.js";
let text3 = "I love React";
let text4 = "I love JavaScript and React";
let regex = /javascript|node|react/gi;
console.log(text1.match(regex));
console.log(text2.match(regex));
console.log(text3.match(regex));
console.log(text4.match(regex));

let d = "d";
console.log(d.match(/[a-zA-Z0-9]/g));
console.log(text1.match(/./g));
console.log('node.js'.match(/\./g));

console.log("js node react".match(/\s/g));
console.log('12 years old'.match(/\d/g));
console.log('In begin'.match(/\bin/gi));

console.log(text2.match(/(love)\s(node)/gi));

console.log(text1.match(/v?a/g));
console.log("123123123".match(/(123)+/g));
console.log("123123123".match(/(123)*/g));
console.log("123123123".match(/(123){1,2}/g));

console.log(text1.match(/(?<language>javascript)/i));


let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let validEmail = "valerii_panov_250640@gmail.com";
let invalidEmail = "val@mail@.com";
console.log(validEmail.match(pattern));
console.log(invalidEmail.match(pattern));