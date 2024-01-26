let titles = document.querySelectorAll(".title");
let texts = document.querySelectorAll(".myText");
titles.forEach(t => t.addEventListener("click", open));
texts.forEach(t => t.addEventListener("click", close));

function open() {
    let el = this.nextElementSibling;
    el.classList.toggle("active");
}

function close() {
    this.classList.remove("active");
    this.classList.add("myText");
}