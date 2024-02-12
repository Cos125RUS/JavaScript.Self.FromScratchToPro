let obj1 = {
    "name": "list",
    "size": 12
};
let obj2 = {
    "name": "list",
    "size": 14
};
let listObj = [obj1, obj2];
let str = JSON.stringify(listObj);
console.log(str);
let newObj = JSON.parse(str);
console.log(newObj);
newObj.forEach(o => {
    console.log(o.name + " " + o.size);
});