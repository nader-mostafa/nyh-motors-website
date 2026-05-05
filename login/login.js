// Custom logic for login
document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');
    const loginExtras = document.getElementById('loginExtras');
    const resetSection = document.getElementById('resetPasswordSection');
    const resetForm = document.getElementById('resetForm');
    const forgotBtn = document.getElementById('forgotPasswordLink');
    const cancelResetLink = document.getElementById('cancelResetLink');

    // Show Reset Password Form
    if (forgotBtn) {
        forgotBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email').value;
            if(!emailInput || !emailInput.includes('@')) {
                alert('Please type your email address in the box above first, then click Forgot Password.');
                return;
            }
            
            // Hide login, show reset smoothly
            if (loginForm) loginForm.style.display = 'none';
            if (loginExtras) loginExtras.style.display = 'none';
            if (resetSection) {
                resetSection.style.display = 'block';
                // Automatically focus the new password field
                document.getElementById('newPassword').focus();
            }
        });
    }

    // Cancel Reset
    if (cancelResetLink) {
        cancelResetLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (resetSection) resetSection.style.display = 'none';
            if (loginForm) loginForm.style.display = 'block';
            if (loginExtras) loginExtras.style.display = 'block';
        });
    }

    // Handle Reset Password Submit
    if (resetForm) {
        resetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newPass = document.getElementById('newPassword').value;
            const confirmPass = document.getElementById('confirmPassword').value;

            if(!newPass || !confirmPass) {
                alert('Please fill out both password fields.');
                return;
            }

            if(newPass !== confirmPass) {
                alert('Passwords do not match! Please try again.');
                return;
            }

            // Success!
            alert('Password successfully reset! You can now log in with your new password.');
            
            // Clear inputs and go back to login view
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
            
            if (resetSection) resetSection.style.display = 'none';
            if (loginForm) loginForm.style.display = 'block';
            if (loginExtras) loginExtras.style.display = 'block';
        });
    }

        // Intercept normal login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            let isValid = true;
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            
            loginForm.querySelectorAll('[required]').forEach(input => {
                if (!input.value.trim() || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
                    isValid = false;
                }
            });

            if (isValid) {
                e.preventDefault();
                
                // Specific Admin Check
                if (emailInput.value.trim() === 'admin@nyhmotors.com' && passwordInput.value === 'admin123') {
                    localStorage.setItem('isAdmin', 'true');
                    localStorage.setItem('isLoggedIn', 'true');
                    alert('Welcome back, Administrator!');
                    window.location.href = '../admin/admin.html';
                    return;
                } else {
                    localStorage.setItem('isAdmin', 'false');
                }

                // Set the global login state for normal users
                localStorage.setItem('isLoggedIn', 'true');
                // Redirect to homepage
                window.location.href = '../index/index.html';
            }
        });
    }
});
