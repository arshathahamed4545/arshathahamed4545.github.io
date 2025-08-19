// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Get the values entered in the input fields
  const userId = document.getElementById('userId').value;
  const password = document.getElementById('password').value;

  // Simple client-side validation (replace this with server-side validation in real apps)
  if (userId === 'harsha' && password === '45') {
    // Successful login
    alert('Login successful!');
    // You can redirect the user to another page, or show a dashboard here
    window.location.href = "adminmain.html"; // Example redirect
  } else {
    // Error message
    document.getElementById('errorMessage').innerText = 'Invalid User ID or Password!';
  }
});
