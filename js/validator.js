function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateRePassword(password, rePassword) {
    return password === rePassword;
}

export function validateFormLogin() {
    // Clear any existing validation errors
    document.querySelectorAll('.error-message').forEach(element => element.remove());

    // Get input values
    const email = document.getElementById('email_input').value.trim();
    const password = document.getElementById('password_input').value.trim();

    // Validate input
    let isValid = true;
    if (email === '') {
        isValid = false;
        displayErrorMessage('email_input', 'Email is required');
    } else if (!validateEmail(email)) {
        isValid = false;
        displayErrorMessage('email_input', 'Invalid email');
    }
    if (password === '') {
        isValid = false;
        displayErrorMessage('password_input', 'Password is required');
    } else if (!validatePassword(password)) {
        isValid = false;
        displayErrorMessage('password_input', 'Password should be at least 6 characters long');
    }

    // Handle validation result
    if (isValid) {
        // Perform login logic
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        if (email === storedEmail && password === storedPassword) {
            // Redirect to content page
            window.location.href = '../html/ViewContent.html';
        } else {
            displayErrorMessage('password_input', 'Invalid email or password');
        }
    }

}


function displayErrorMessage(inputId, message) {
    console.log("inputId: ", inputId, "message: ", message);

    const input = document.getElementById(inputId);
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    input.parentElement.appendChild(errorMessage);
}



export function validateFormRegister() {
    // Clear any existing validation errors
    document.querySelectorAll('.error-message').forEach(element => element.remove());

    // Get input values
    const userName = document.getElementById('userName').value.trim();
    const email = document.getElementById('register_email_input').value.trim();
    const password = document.getElementById('register_password_input').value.trim();
    const rePassword = document.getElementById('re_password_input').value.trim();

    console.log(userName, email, password, rePassword);
    // Validate input
    let isValid = true;
    if (userName === '') {
        isValid = false;
        displayErrorMessage('userName', 'User Name is required');
    }
    if (email === '') {
        isValid = false;
        displayErrorMessage('register_email_input', 'Email is required');
    } else if (!validateEmail(email)) {
        isValid = false;
        displayErrorMessage('register_email_input', 'Invalid email');
    }
    if (password === '') {
        isValid = false;
        displayErrorMessage('register_password_input', 'Password is required');
    } else if (!validatePassword(password)) {
        isValid = false;
        displayErrorMessage('register_password_input', 'Password should be at least 6 characters long');
    }
    if (rePassword === '') {
        isValid = false;
        displayErrorMessage('re_password_input', 'Re Password is required');
    } else if (!validateRePassword(password, rePassword)) {
        isValid = false;
        displayErrorMessage('re_password_input', 'Passwords do not match');
    }

    // Handle validation result
    if (isValid) {
        saveRegistrationData(userName, email, password);
        // Redirect to login page or perform any other action after successful registration
        window.location.href = '../html/login.html';
    }
}

export function saveRegistrationData(userName, email, password) {
    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}