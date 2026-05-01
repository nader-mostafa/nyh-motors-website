/* validation.js */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.custom-validate').forEach(form => {
    form.addEventListener('submit', function(e) {
      let valid = true;
      form.querySelectorAll('input[required], textarea[required], select[required]').forEach(input => {
        input.setCustomValidity('');
        const err = document.getElementById(input.id + '-error');
        if (err) err.classList.remove('show');

        if (!input.value.trim()) {
          valid = false;
          input.setCustomValidity('This field is required.');
          if (err) { err.textContent = 'This field is required.'; err.classList.add('show'); }
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          valid = false;
          input.setCustomValidity('Please enter a valid email address.');
          if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('show'); }
        }
      });
      if (!valid) e.preventDefault();
    });
  });
});
