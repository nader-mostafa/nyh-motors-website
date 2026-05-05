// Custom logic for dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Time-of-Day Greeting
    const greetingEl = document.querySelector('.dash-welcome h2');
    if (greetingEl) {
        const hour = new Date().getHours();
        let timeGreeting = 'Welcome back';
        if (hour < 12) timeGreeting = 'Good morning';
        else if (hour < 18) timeGreeting = 'Good afternoon';
        else timeGreeting = 'Good evening';
        
        // Replace 'Welcome back' with the time greeting, keeping the name
        greetingEl.textContent = greetingEl.textContent.replace('Welcome back', timeGreeting);
    }

    // Add click animation to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });
});
