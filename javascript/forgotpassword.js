document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('forgotPasswordForm');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = form.email.value;
        const newPassword = form.newPassword.value;
        const confirmPassword = form.confirmPassword.value;

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            passwordError.textContent = "Passwords do not match. Please try again.";
            return;
        } else {
            passwordError.textContent = "";
        }

        // Simulate success message (in a real scenario, you'd handle this with server-side code)
        alert("Password reset successful!");

        // Redirect to the sign-in page
        window.location.href = 'signin.html';
    });

    // Update the year dynamically
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Smooth scrolling to social media links (if needed for internal page sections)
    document.querySelectorAll('.social-icons a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default and scroll if href starts with #
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});