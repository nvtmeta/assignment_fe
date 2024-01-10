
import { validateFormLogin,validateFormRegister } from './validator.js';

// Call the validateFormLogin function when the login form is submitted
document.getElementById('login_form').addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormLogin();
});

document.getElementById('register_form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateFormRegister();
  });

