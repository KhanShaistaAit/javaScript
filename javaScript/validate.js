// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const formMessage = document.getElementById('formMessage');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');

    // Error elements
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const ageError = document.getElementById('ageError');

    // Function to validate the form
    function validateForm() {
        let isValid = true;

        // Username validation
        if (usernameInput.value.trim().length < 3) {
            usernameError.classList.remove('hidden');
            isValid = false;
        } else {
            usernameError.classList.add('hidden');
        }

        // Email validation
        if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
        }

        // Age validation
        const age = parseInt(ageInput.value, 10);
        if (isNaN(age) || age < 1 || age > 120) {
            ageError.classList.remove('hidden');
            isValid = false;
        } else {
            ageError.classList.add('hidden');
        }

        return isValid;
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            formMessage.classList.remove('hidden'); // Show success message
        }
    });
});
