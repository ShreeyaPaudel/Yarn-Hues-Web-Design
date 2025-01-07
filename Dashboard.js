document.addEventListener("DOMContentLoaded", function () {
    // Handle security question button click
    const securityQuestionsBtn = document.getElementById("security-questions-btn");
    const securityQuestionsBox = document.getElementById("security-questions-box");
    const cancelSecurityQuestionBtn = document.getElementById("cancel-security-question");

    securityQuestionsBtn.addEventListener("click", function () {
        // Toggle the visibility of the security questions box
        if (securityQuestionsBox.style.display === "none") {
            securityQuestionsBox.style.display = "block";
        } else {
            securityQuestionsBox.style.display = "none";
        }
    });

    // Handle cancel button inside the security questions box
    cancelSecurityQuestionBtn.addEventListener("click", function () {
        // Hide the security questions box when cancel is clicked
        securityQuestionsBox.style.display = "none";
    });

    // Handle security questions form submission
    const securityQuestionsForm = document.getElementById("security-questions-form");
    securityQuestionsForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get the selected question and answer
        const selectedQuestion = document.getElementById("security-question").value;
        const answer = document.getElementById("security-answer").value.trim();

        if (selectedQuestion && answer) {
            // Save to localStorage or handle as needed
            localStorage.setItem("securityQuestion", selectedQuestion);
            localStorage.setItem("securityAnswer", answer);

            alert("Security question saved successfully!");
            // Hide the security questions box
            securityQuestionsBox.style.display = "none";
        } else {
            alert("Please select a question and provide an answer.");
        }
    });
});
