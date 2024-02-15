const myFunc = () => new Promise((resolve, reject) => true ? resolve("Hello") : reject(new Error("!")));
myFunc().then(val => console.log(val)).catch(err => console.log(err.message));