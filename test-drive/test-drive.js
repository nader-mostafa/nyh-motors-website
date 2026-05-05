document.addEventListener('DOMContentLoaded', () => {
    // 1. Set min date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    // 2. Auto-select car from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const carParam = urlParams.get('car');
    
    if (carParam) {
        const select = document.getElementById('carSelect');
        if (select) {
            // Force case-insensitivity match if needed, or exact match
            const options = Array.from(select.options);
            const matchedOption = options.find(opt => opt.value.toLowerCase() === carParam.toLowerCase());
            
            if (matchedOption) {
                select.value = matchedOption.value;
            }
        }
    }
    // 3. Intercept form submission
    const form = document.querySelector('.custom-validate');
    if (form) {
        form.addEventListener('submit', (e) => {
            // Check HTML5 validity
            if (form.checkValidity()) {
                e.preventDefault(); // Stop redirection
                
                const carSelect = document.getElementById('carSelect');
                const selectedCarText = carSelect.options[carSelect.selectedIndex].text;
                const date = document.getElementById('date').value;
                
                alert('Booking Confirmed!\n\nYour test drive for the ' + selectedCarText + ' on ' + date + ' has been successfully booked. We will contact you shortly!');
                
                form.reset(); // Clear the form
            }
        });
    }
});

