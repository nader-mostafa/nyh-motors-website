// Custom logic for contact
document.addEventListener('DOMContentLoaded', () => {
    // Intercept form submission
    const form = document.querySelector('.custom-validate');
    if (form) {
        form.addEventListener('submit', (e) => {
            let isValid = true;
            form.querySelectorAll('[required]').forEach(input => {
                if (!input.value.trim() || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
                    isValid = false;
                }
            });

            if (isValid) {
                e.preventDefault();
                alert('Thank you! Your message has been sent to the NYH Motors support team. We will get back to you within 24 hours.');
                form.reset(); // Clear the form
            }
        });
    }

    // Click to copy info
    const infoItems = document.querySelectorAll('.info-item p');
    infoItems.forEach(p => {
        if(p.textContent.includes('@') || p.textContent.includes('+20')) {
            p.style.cursor = 'pointer';
            p.title = 'Click to copy';
            p.addEventListener('click', () => {
                navigator.clipboard.writeText(p.textContent).then(() => {
                    const original = p.textContent;
                    p.textContent = 'Copied!';
                    p.style.color = 'var(--accent-color)';
                    setTimeout(() => {
                        p.textContent = original;
                        p.style.color = '';
                    }, 1500);
                });
            });
        }
    });
});
