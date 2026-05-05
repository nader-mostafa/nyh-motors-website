// Custom logic for faq


    function toggleFaq(header) {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-header').forEach(h => h.classList.remove('open'));
      document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'));
      // Open clicked if it was closed
      if (!isOpen) {
        header.classList.add('open');
        body.classList.add('open');
      }
    }
  



