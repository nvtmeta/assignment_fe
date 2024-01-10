

// Add content
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var title = document.getElementById("title").value;
    var brief = document.getElementById("brief").value;
    var content = document.getElementById("content").value;

    if (title.length < 10 || title.length > 200) {
        alert("Title must be between 10 and 200 characters.");
        return;
    }

    if (brief.length < 30 || brief.length > 150) {
        alert("Brief must be between 30 and 150 characters.");
        return;
    }

    if (content.length < 50 || content.length > 1000) {
        alert("Content must be between 50 and 1000 characters.");
        return;
    }

    // If all validations pass, you can proceed with further processing
    // For example, you can call another function to handle form submission
    submitForm();
});

function submitForm() {
    // Code to handle form submission
    document.getElementById("myForm").submit();
}


// validate edit form 

function validateEditForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var description = document.getElementById("description").value;

    if (firstName.length < 3 || firstName.length > 30) {
        alert("First Name must be between 3 and 30 characters.");
        return;
    }

    if (lastName.length < 3 || lastName.length > 30) {
        alert("Last Name must be between 3 and 30 characters.");
        return;
    }

    if (phone.length < 9 || phone.length > 13) {
        alert("Phone number must be between 9 and 13 digits.");
        return;
    }

    if (description.length > 200) {
        alert("Description can have maximum 200 characters.");
        return;
    }

    alert("Update profile successfully.");
}
