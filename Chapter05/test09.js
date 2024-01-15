let arr = [];
for (let i = 0; i < 11; i++) {
    arr.push([]);
    for (let j = 0; j < 11; j++) {
        arr[i].push(i*j);
    }
}
console.table(arr);