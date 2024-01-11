// Get the logout button element
const logoutButton = document.getElementById('dropdown_item_logout');

// Function to handle logout
function handleLogout() {
  // Delete the email and password from local storage
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  
  alert("logout success")
  // Redirect the user to the login page
  window.location.href = '../html/login.html';
}

// Add event listener to logout button
logoutButton.addEventListener('click', handleLogout);