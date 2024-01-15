let count = 1000;
(() => {
    let count = 2000;
    console.log(count);
})();

let result = (() => { 
    let result = 3000; 
    return result; 
});
console.log(result, result());

console.log(((x) => {
    let count = x;
    return count;
})(4000));