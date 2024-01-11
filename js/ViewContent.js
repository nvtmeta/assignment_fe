
    // Retrieve table data from local storage
    const tableData = JSON.parse(localStorage.getItem('formData')) || [];
    // Get the table body element
    const tableBody = document.getElementById("table_body");

    console.log(tableData)
    console.log("tableBody",tableBody)
    // Generate table rows based on the data
    tableData.forEach((data, index) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("th");
        idCell.setAttribute("scope", "row");
        idCell.textContent = index + 1;
        row.appendChild(idCell);

        console.log("data", data)
        Object.values(data).forEach(value => {
            console.log("value", value)

            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
 