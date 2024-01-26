let myArray = [];
let table = document.getElementById('output');
document.getElementById("addNew").addEventListener('click', () => {
    let name = document.getElementById("addFriend").value;
    addFriend(name);
});


function addFriend(name) {
    myArray.push(name);
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${myArray.length}</td><td>${name}</td>`;
    let count = 0;
    let countTd = document.createElement("td");
    countTd.innerText = 0;
    tr.appendChild(countTd);
    table.appendChild(tr);
    tr.addEventListener("click", () => {
        count++;
        countTd.innerText = count;
    });
}

