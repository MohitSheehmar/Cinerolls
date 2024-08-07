document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Check if fields are filled
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Show loading text or spinner
    const submitButton = document.querySelector('#signinForm button[type="submit"]');
    submitButton.innerHTML = 'Signing in...';

    // Simulate form validation (Replace with actual validation logic)
    if (username === 'mohitsheehmar' && password === '7761@Mohit') {
        // Simulate successful login (Replace with redirect or other action)
        setTimeout(() => {
            alert('Successfully signed in!');
            window.location.href = 'portfolio.html'; // Redirect to portfolio page
        }, 2000); // Simulating delay for demo
    } else {
        // Show error message (Replace with actual error handling)
        setTimeout(() => {
            alert('Wrong username or password. Please try again.');
            submitButton.innerHTML = 'Sign In'; // Reset button text
        }, 2000); // Simulating delay for demo
    }
});