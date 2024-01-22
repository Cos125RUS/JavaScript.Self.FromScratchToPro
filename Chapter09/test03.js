const output = document.querySelector(".output");
console.log(output);
const mainList = output.querySelector("ul");
mainList.id = "mainList";
console.log(mainList);
const divs = document.querySelectorAll("div");
// divs.forEach(x => console.log(x));
var count = 0;
divs.forEach(x => {
    x.id = "div_" + count++;
    console.log(x.tagName);
    count % 2 == 0 ? x.style.color = "red" : x.style.color = "blue";
});