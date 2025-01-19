document.addEventListener("DOMContentLoaded", function () {
    const notificationBtn = document.getElementById("notification-btn");
    const notificationDropdown = document.getElementById("notification-dropdown");

    notificationBtn.addEventListener("click", function () {
        // Toggle the display of the notification dropdown
        if (notificationDropdown.style.display === "none") {
            notificationDropdown.style.display = "block";
        } else {
            notificationDropdown.style.display = "none";
        }
    });

    // Close the dropdown if clicked outside
    document.addEventListener("click", function (event) {
        if (!notificationBtn.contains(event.target) && !notificationDropdown.contains(event.target)) {
            notificationDropdown.style.display = "none";
        }
    });


});

