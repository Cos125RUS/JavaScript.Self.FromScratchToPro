document.getElementById("addNew").addEventListener("click", addOne);

function addOne() {
    let li = document.createElement("li");
    li.innerHTML = document.getElementById("addItem").value;
    document.getElementById("sList").appendChild(li);
}
    