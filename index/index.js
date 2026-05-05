// Custom logic for index
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Number Counter Animation for Stats Bar ---
    const stats = document.querySelectorAll('.stat-item .num');
    
    // We only want the animation to run once when the user scrolls down to it
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.innerText;
                
                // Extract just the numbers to animate
                const finalNum = parseFloat(text.replace(/[^0-9.]/g, ''));
                const suffix = text.replace(/[0-9.]/g, ''); // grabs the '+', 'K+', or '★'
                
                let current = 0;
                // Determine increment based on the size of the number
                const increment = finalNum / 40; 
                
                const updateCounter = () => {
                    current += increment;
                    if (current < finalNum) {
                        // Keep 1 decimal for small ratings like 4.9, otherwise round it
                        target.innerText = (finalNum % 1 !== 0 ? current.toFixed(1) : Math.ceil(current)) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.innerText = text; // Set to exactly the final string when done
                    }
                };
                
                updateCounter();
                observer.unobserve(target); // Only animate once
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // --- 2. Scroll Reveal for Bento Cards ---
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const bentoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a slight stagger effect based on the DOM index
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                bentoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    bentoCards.forEach(card => {
        bentoObserver.observe(card);
    });
});
