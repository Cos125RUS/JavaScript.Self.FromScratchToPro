const checker = val => new Promise((resolve, reject) => val > 5 ? resolve("Ready") : reject(new Error("oh no")));
checker(5)
    .then(data => console.log(data))
    .catch(err => console.log(err.message))
    .finally(() => console.log("Done!"));