function processPayment() {
    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('card-number-error').textContent = '';
    document.getElementById('expiry-month-error').textContent = '';
    document.getElementById('expiry-year-error').textContent = '';
    document.getElementById('cvv-error').textContent = '';
    document.getElementById('address-error').textContent = '';
    document.getElementById('city-error').textContent = '';
    document.getElementById('state-error').textContent = '';
    document.getElementById('zip-error').textContent = '';
    document.getElementById('country-error').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryMonth = document.getElementById('expiry-month').value.trim();
    const expiryYear = document.getElementById('expiry-year').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const country = document.getElementById('country').value.trim();

    var isValid = true;

    // Validate name (only letters and spaces allowed)
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name) || name === '') {
        document.getElementById('name-error').textContent = 'Name must contain only letters and spaces.';
        isValid = false;
    }

    // Validate card number (basic length check for demonstration)
    if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementById('card-number-error').textContent = 'Card number must be exactly 16 digits.';
        isValid = false;
    }

    // Validate expiry date
    const today = new Date();
    const expiryDate = new Date(expiryYear, expiryMonth - 1);
    if (!expiryMonth || !expiryYear || expiryDate <= today) {
        document.getElementById('expiry-month-error').textContent = 'Expiry date must be in the future.';
        isValid = false;
    }

    // Validate CVV (3 digits)
    if (!/^\d{3}$/.test(cvv)) {
        document.getElementById('cvv-error').textContent = 'CVV must be exactly 3 digits.';
        isValid = false;
    }

    // Validate address fields
    if (address === '') {
        document.getElementById('address-error').textContent = 'Address is required.';
        isValid = false;
    }
    if (city === '') {
        document.getElementById('city-error').textContent = 'City is required.';
        isValid = false;
    }
    if (state === '') {
        document.getElementById('state-error').textContent = 'State is required.';
        isValid = false;
    }
    if (!/^[A-Za-z]{3}\d{3}$/.test(zip)) {
        document.getElementById('zip-error').textContent =
            'Zip code must contain exactly 3 letters followed by 3 digits.';
        isValid = false;
    }
    if (country === '') {
        document.getElementById('country-error').textContent = 'Country is required.';
        isValid = false;
    }

    // If form is valid, show success message and redirect to cart
    if (isValid) {
        alert('Payment successful!');
        window.location.href = 'cart.html'; // Redirect to cart page
    }
}

// Populate expiry year options dynamically
document.addEventListener('DOMContentLoaded', () => {
    const expiryYearSelect = document.getElementById('expiry-year');
    const currentYear = new Date().getFullYear();
    for (var i = 0; i < 10; i++) {
        const option = document.createElement('option');
        option.value = currentYear + i;
        option.textContent = currentYear + i;
        expiryYearSelect.appendChild(option);
    }
});