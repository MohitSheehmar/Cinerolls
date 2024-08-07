// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Find the form and submit button
    var infoForm = document.getElementById('infoForm');
    var submitBtn = infoForm.querySelector('.btn-submit');

    // Attach an event listener for form submit event
    infoForm.addEventListener('submit', function (event) {
      
        event.preventDefault();
        
        // Validate the form using the formValidations function
        if (formValidations()) {
           
            console.log('Form submitted successfully!');
            alert('Form submitted successfully!');
            
            // Optionally, you can reset the form after successful submission
            infoForm.reset();
        } else {
          
            console.log('Please fix the errors and then submit the form.');
            alert('Please fix the errors and then submit the form.');
        }
    });

    // Define formValidations function for client-side validation
    function formValidations() {
        const email = document.getElementById('email').value.trim();
        const confirmEmail = document.getElementById('confirmEmail').value.trim();
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();

        const nameRegex = /^[a-zA-Z]+$/;

        var isValid = true;

        // Clear any previous error messages
        clearErrors();

        // Check for empty fields
        if (!email || !confirmEmail || !firstName || !lastName) {
            error('email', 'All fields are required.');
            isValid = false;
        }

        // Validate email format
        if (email !== confirmEmail) {
            error('confirmEmail', 'Email and Re-enter Email do not match.');
            isValid = false;
        }

        // Validate first name
        if (!nameRegex.test(firstName)) {
            error('firstName', 'First name should only contain characters.');
            isValid = false;
        }

        // Validate last name
        if (!nameRegex.test(lastName)) {
            error('lastName', 'Last name should only contain characters.');
            isValid = false;
        }

        // Display error message beside the field
        function error(fieldId, message) {
            const errorElement = document.getElementById(`${fieldId}Error`);
            if (errorElement) {
                errorElement.textContent = message;
            }
        }

        // Clear all error messages
        function clearErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(element => {
                element.textContent = '';
            });
        }

        // If form is not valid, display alert
        if (!isValid) {
            alert('Please fix the errors and then submit the form.');
        }

        // Return whether the form is valid or not
        return isValid;
    }
});