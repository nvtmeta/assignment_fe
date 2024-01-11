import { displayErrorMessage } from "./validator.js";

// Get the form element
const form = document.getElementById('form_edit_profile');

// Function to populate the form fields with user data
function populateFormFields() {
  // Get the user data from local storage
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');
  const description = localStorage.getItem('description');


  console.log(firstName, lastName, email, phone, description)
  // Set the form input values
  document.getElementById('firstName').value = firstName;
  document.getElementById('lastName').value = lastName;
  document.getElementById('email').innerText = email;
  document.getElementById('phone').value = phone;
  document.getElementById('description').value = description;
}

// Function to handle form submission
export function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting



  // Clear any existing validation errors
  document.querySelectorAll('.error-message').forEach(element => element.remove());

  // Get the updated form input values
  const updatedFirstName = document.getElementById('firstName').value.trim();
  const updatedLastName = document.getElementById('lastName').value.trim();
  const updatedEmail = document.getElementById('email').innerText.trim();
  const updatedPhone = document.getElementById('phone').value.trim();
  const updatedDescription = document.getElementById('description').value.trim();

  // Validate input
  let isValid = true;
  if (updatedFirstName.length < 3 || updatedFirstName.length > 30) {
    isValid = false;
    displayErrorMessage('firstName', 'First Name should be between 3 and 30 characters');
  }
  if (updatedLastName.length < 3 || updatedLastName.length > 30) {
    isValid = false;
    displayErrorMessage('lastName', 'Last Name should be between 3 and 30 characters');
  }
  if (updatedPhone.length < 9 || updatedPhone.length > 13) {
    isValid = false;
    displayErrorMessage('phone', 'Phone number should be between 9 and 13 characters');
  }
  if (updatedDescription.length > 255) {
    isValid = false;
    displayErrorMessage('description', 'Description should be less than 255 characters');
  }

  // Handle validation result
  if (isValid) {
    // Update the user data in local storage
    localStorage.setItem('firstName', updatedFirstName);
    localStorage.setItem('lastName', updatedLastName);
    localStorage.setItem('email', updatedEmail);
    localStorage.setItem('phone', updatedPhone);
    localStorage.setItem('description', updatedDescription);

    // Display a success message or perform any other necessary actions
    alert('Profile updated successfully!');
  }
}
// Call the populateFormFields function when the page loads
window.addEventListener('DOMContentLoaded', populateFormFields);

// Add an event listener to the form submit button
form.addEventListener('submit', handleSubmit);