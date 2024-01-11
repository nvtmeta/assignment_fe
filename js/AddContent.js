import { displayErrorMessage } from "./validator.js";


export function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear any existing validation errors
    document.querySelectorAll('.error-message').forEach(element => element.remove());

    // Get the form input values
    const title = document.getElementById('title').value.trim();
    const brief = document.getElementById('brief').value.trim();
    const content = document.getElementById('content').value.trim();

    // Validate input
    let isValid = true;
    if (title.length < 10 || title.length > 200) {
        isValid = false;
        displayErrorMessage('title', 'Title should be between 10 and 200 characters');
    }
    if (brief.length < 30 || brief.length > 150) {
        isValid = false;
        displayErrorMessage('brief', 'Brief should be between 30 and 150 characters');
    }
    if (content.length < 50 || content.length > 1000) {
        isValid = false;
        displayErrorMessage('content', 'Content should be between 50 and 1000 characters');
    }

    // Handle validation result
    if (isValid) {
        // Retrieve existing data from local storage or initialize an empty array
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];

        // Create a new form object
        const formObject = {
            title,
            brief,
            content
        };

        // Push the form object into the stored data array
        storedData.push(formObject);

        // Store the updated data in local storage
        localStorage.setItem('formData', JSON.stringify(storedData));

        // Display success message
        alert('Form submitted successfully!');

        // Reset the form
        document.getElementById('submit_add_form').reset();
    }
}
// Add event listener to submit button
const submitButton = document.querySelector('#submit_add_form');
submitButton.addEventListener('submit', handleSubmit);
