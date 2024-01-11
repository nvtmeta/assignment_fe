
import { validateFormRegister } from './validator.js';


document.getElementById('register_form').addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormRegister();
});