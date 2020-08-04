var i = 0;

function addTableRow() {
    let date = document.getElementById("date").value;
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let loc = document.getElementById("loc").value;
    i++;
    console.log(i);

    var table = document.getElementById("transactions");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = date;
    cell2.innerHTML = desc;
    cell3.innerHTML = amount;
    cell4.innerHTML = loc;
    cell5.innerHTML = '<button class="btn-delete" type="button" onClick="deleteTableRow(this)">Delete</button>';
}

function deleteTableRow(element) {
    var i = element.parentNode.parentNode.rowIndex;
    document.getElementById("transactions").deleteRow(i);
}