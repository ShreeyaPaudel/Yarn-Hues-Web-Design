// JavaScript for handling design buttons
function viewDesign(design) {
    alert(`You selected the ${design} design. Further details coming soon!`);
}

// Optional: Add interactivity for the notification button
const notificationBtn = document.querySelector('.notification-btn');
const notificationDropdown = document.querySelector('.notification-dropdown');

notificationBtn.addEventListener('click', () => {
    const isVisible = notificationDropdown.style.display === 'block';
    notificationDropdown.style.display = isVisible ? 'none' : 'block';
});