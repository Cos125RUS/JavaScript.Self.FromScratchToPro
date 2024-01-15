let arr = [];
for (let i = 0; i < 3; i++) {
    arr.push([]);
    for (let j = 0; j < 7; j++) {
        arr[i].push(j);
    }
}
console.table(arr);