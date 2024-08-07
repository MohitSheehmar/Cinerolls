function formValidations() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirmEmail').value.trim();
    const stateCode = document.getElementById('stateCode').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const countryCode = document.getElementById('countryCode').value;

    const nameRegex = /^[a-zA-Z]+$/;
    const stateCodeRegex = /^[A-Za-z]{2}$/;
    const zipCodeRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Assuming 10 digits for the phone number

    var isValid = true;

    clearErrors();

    if (!firstName) {
        error('firstName', 'First name is required.');
        isValid = false;
    } else if (!nameRegex.test(firstName)) {
        error('firstName', 'First name should only contain letters.');
        isValid = false;
    }

    if (!lastName) {
        error('lastName', 'Last name is required.');
        isValid = false;
    } else if (!nameRegex.test(lastName)) {
        error('lastName', 'Last name should only contain letters.');
        isValid = false;
    }

    if (!email) {
        error('email', 'Email is required.');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        error('email', 'Invalid email format.');
        isValid = false;
    }

    if (!confirmEmail) {
        error('confirmEmail', 'Re-enter Email is required.');
        isValid = false;
    } else if (email !== confirmEmail) {
        error('confirmEmail', 'Email and Re-enter Email do not match.');
        isValid = false;
    }

    if (!stateCode) {
        error('stateCode', 'State code is required.');
        isValid = false;
    } else if (!stateCodeRegex.test(stateCode)) {
        error('stateCode', 'State code should be exactly 2 characters.');
        isValid = false;
    }

    if (!zipCode) {
        error('zipCode', 'Postal code is required.');
        isValid = false;
    } else if (!zipCodeRegex.test(zipCode)) {
        error('zipCode', 'Postal code should be in the format Letter+number+Letter+number+Letter+number.');
        isValid = false;
    }

    if (!phoneNumber) {
        error('phoneNumber', 'Phone number is required.');
        isValid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
        error('phoneNumber', 'Phone number should be 10 digits.');
        isValid = false;
    }

    function error(fieldId, message) {
        const errorElement = document.getElementById(fieldId + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }

    if (isValid) {
        alert('Sign Up Completed');

    } else {
        alert('Please fix the errors and then submit the form.');
    }

    return isValid;
}