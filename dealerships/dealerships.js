// Custom logic for dealerships
document.addEventListener('DOMContentLoaded', () => {
    const dealerCards = document.querySelectorAll('.dealer-card');
    
    dealerCards.forEach(card => {
        // 1. Make the "Get Directions" button open real Google Maps
        const addressSpan = card.querySelector('.fa-location-dot').nextElementSibling;
        const dirBtn = card.querySelector('.btn-outline');
        
        if (addressSpan && dirBtn) {
            const address = addressSpan.textContent;
            dirBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Stop it from going to contact.html
                // Create a Google Maps Search link
                const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address);
                window.open(mapUrl, '_blank'); // Open in new tab
            });
        }

        // 2. Click-to-Copy for Phone Numbers
        const phoneSpan = card.querySelector('.fa-phone').nextElementSibling;
        if (phoneSpan) {
            phoneSpan.style.cursor = 'pointer';
            phoneSpan.title = 'Click to copy phone number';
            phoneSpan.style.transition = 'color 0.3s';
            
            phoneSpan.addEventListener('click', () => {
                navigator.clipboard.writeText(phoneSpan.textContent).then(() => {
                    const originalText = phoneSpan.textContent;
                    phoneSpan.textContent = 'Copied to clipboard!';
                    phoneSpan.style.color = 'var(--accent-color)';
                    
                    setTimeout(() => {
                        phoneSpan.textContent = originalText;
                        phoneSpan.style.color = '';
                    }, 1500);
                });
            });
        }
    });
});
