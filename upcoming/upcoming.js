// Custom logic for upcoming
document.addEventListener('DOMContentLoaded', () => {
    const notifyBtns = document.querySelectorAll('.notify-me-btn');
    notifyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Coming soon you will be notified');
        });
    });
});
