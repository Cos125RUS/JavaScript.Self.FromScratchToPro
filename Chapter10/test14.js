const names = ["Валерий", "Алексей", "Иван", "Максим", "Сергей", "Геннадий", "Дмитрий"];
const message = document.getElementById("message");

function getData(element) {
    let i = element.getAttribute("data-row");
    let name = element.getAttribute("data-name");
    message.innerHTML = `${i} : ${name}`;
}

function build() {
    let html = "<h1>My First Table</h1><table>";
    for (let i = 0; i < names.length; i++) {
        html += `<tr class="box" data-row="${i + 1}" data-name="${names[i]}" onclick="getData(this)"><td>${i + 1}</td><td>${names[i]}</td></tr>`;
    }
    html += "</table>";
    document.getElementById("output").innerHTML = html;
} 

build();