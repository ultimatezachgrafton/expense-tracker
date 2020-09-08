const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function(e) {
    addTableRow();
});

document.addEventListener('keydown', function(e) {
    if (e.which == 13 || e.keyCode == 13) {
        addTableRow();
    }
})

function addTableRow() {

    const table = document.getElementById("transactions");
    const row = table.insertRow(1);

    const cell1 = row.insertCell(0);
    cell1.innerHTML = document.getElementById("date").value;

    const cell2 = row.insertCell(1);
    cell2.innerHTML = document.getElementById("desc").value;
    
    const cell3 = row.insertCell(2);
    cell3.innerHTML = document.getElementById("amount").value;

    const cell4 = row.insertCell(3);
    cell4.innerHTML = document.getElementById("loc").value;

    const cell5 = row.insertCell(4);

    const deleteButton = document.createElement('button');
    deleteButton.className = "btn-delete";
    deleteButton.type = "button";
    deleteButton.addEventListener('click', function(e) {
        let i = this.parentNode.parentNode.rowIndex;
        document.getElementById("transactions").deleteRow(i);

        const tableBody = document.getElementById('table-body');
        if (tableBody.rows.length === 0) {
            const emptyRow = tableBody.insertRow(0);
            emptyRow.id = 'empty-row';
            const cell1 = emptyRow.insertCell(0);
            cell1.setAttribute('colspan', '5');
            cell1.textContent = 'No expenses yet!';
        }
    })
    deleteButton.textContent = "Delete";
    cell5.appendChild(deleteButton);

    const emptyRow = document.getElementById('empty-row');
    if (emptyRow) {
        const tableBody = document.getElementById('table-body');
        tableBody.deleteRow(emptyRow.sectionRowIndex);
    }
}