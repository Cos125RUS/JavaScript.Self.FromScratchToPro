const accessPasses = ["root", "admin", "user", "password", "pass"];
const check = value => accessPasses.includes(value);
const enter = value => new Promise((resolve, reject) => check(value) ? resolve("ok") : reject("fail"));
const password = value => enter(value)
    .then(complete => console.log(complete))
    .catch(error => console.log(error));

password("root");
password("qwerty");