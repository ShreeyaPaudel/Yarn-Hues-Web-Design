

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector('form'); // Get the login form

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting to the server

        // Get the input values
        const enteredEmail = document.getElementById('username').value.trim();
        const enteredPassword = document.getElementById('password').value.trim();

        // Retrieve stored values from localStorage
        const storedEmail = localStorage.getItem("storedEmail");
        const storedPassword = localStorage.getItem("storedPassword");

        // Validate credentials
        if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
            alert("Login successful!");
            // Optionally, redirect to another page
            window.location.href = "Dashboard.html"; // Replace with your desired page
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
