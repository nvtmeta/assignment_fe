$(document).ready(function () {
    // Get the current page URL
    var currentUrl = window.location.href;

    // Load the initial page (view-content.html) on page load
    $('#dynamic-content').load('view-content.html', function () {
        renderTableContent();
    });

    // Handle navigation clicks
    $('.link_spa').each(function (e) {

        var page = $(this).attr('href');

        // Check if the current page URL matches the menu item's page URL
        if (currentUrl.includes(page)) {
            $(this).parent().addClass('active');
        }
    });

    $('.link_spa').click(function (e) {
        e.preventDefault();

        // Get the href attribute of the clicked link
        var page = $(this).attr('href');

        // Load the corresponding HTML content using AJAX instead of full page reload
        $.get(page, function (data) {
            $('#dynamic-content').html(data);
            renderTableContent();
        });

        // Remove the 'active' class from all menu items
        $('.link_spa').parent().removeClass('active');

        // Add the 'active' class to the clicked menu item
        $(this).parent().addClass('active');
    });

    function renderTableContent() {
        // Retrieve table data from local storage
        const tableData = JSON.parse(localStorage.getItem('formData')) || [];

        // Get the table body element
        const tableBody = $("#table_body");

        // Clear any existing rows in the table
        tableBody.empty();

        // Generate table rows based on the data
        tableData.forEach((data, index) => {
            const row = $("<tr></tr>");

            const idCell = $("<th></th>");
            idCell.attr("scope", "row");
            idCell.text(index + 1);
            row.append(idCell);

            Object.values(data).forEach(value => {
                const cell = $("<td></td>");
                cell.text(value);
                row.append(cell);
            });

            tableBody.append(row);
        });
    }
});