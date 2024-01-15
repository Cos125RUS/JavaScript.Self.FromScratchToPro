let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push({name: `Lesson${i}`, status: i%2==0 ? true : false});
}
console.log(arr);