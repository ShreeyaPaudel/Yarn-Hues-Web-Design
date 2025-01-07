document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const fullName = document.getElementById("fullName");
    const DOB = document.getElementById("dob");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value.trim())) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        // Validate password strength
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password.value.trim())) {
            alert("Password must be at least 8 characters long, including uppercase, lowercase, a number, and a special character.");
            password.focus();
            return;
        }

        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match.");
            confirmPassword.focus();
            return;
        }

        // Save user data to local storage
        localStorage.setItem("storedFullName", fullName.value.trim());
        localStorage.setItem("storedDOB", DOB.value.trim());
        localStorage.setItem("storedEmail", email.value.trim());
        localStorage.setItem("storedAddress", address.value.trim());
        localStorage.setItem("storedPassword", password.value.trim());

        alert("Signup successful! You can now log in.");

        // Redirect to the dashboard
        window.location.href = "Dashboard.html"; // Replace with the actual file path

        // Reset the form
        // form.reset();
    });
});
