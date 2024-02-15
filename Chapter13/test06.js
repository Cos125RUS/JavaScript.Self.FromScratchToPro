const promise = new Promise(function(resolve, reject) {
    reject("oops...");
}).then(value => {
    console.log(value);
    return "we";
}).then(value => {
    console.log(value);
    return "can";
}).then(value => {
    console.log(value);
    return "chain";
}).then(value => {
    console.log(value);
    return "promise";
}).then(value => {
    console.log(value);
}).catch(value => {
    console.log(value);
});