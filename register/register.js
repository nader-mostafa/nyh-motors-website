// Custom logic for register
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.custom-validate');
    if (form) {
        form.addEventListener('submit', (e) => {
            // Check if the form is actually valid
            let isValid = true;
            form.querySelectorAll('[required]').forEach(input => {
                if (!input.value.trim() || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
                    isValid = false;
                }
            });

            // If everything is valid, we intercept the normal HTML redirect
            if (isValid) {
                e.preventDefault(); // Stop normal form submission
                
                // Show success message
                alert('Registration Successful! We will now redirect you to the Login page.');
                
                // Manually redirect
                window.location.href = '../login/login.html';
            }
        });
    }
});
