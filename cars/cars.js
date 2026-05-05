// Custom logic for cars


    document.addEventListener('DOMContentLoaded', () => {
      const g = document.getElementById('carGrid');
      document.getElementById('gridViewBtn')?.addEventListener('click', () => g.classList.remove('car-list-view'));
      document.getElementById('listViewBtn')?.addEventListener('click', () => g.classList.add('car-list-view'));
      document.getElementById('carSearchInput')?.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        g.querySelectorAll('.inventory-card').forEach(card => {
          const name = card.querySelector('h3').textContent.toLowerCase();
          card.style.display = name.includes(term) ? '' : 'none';
        });
      });
    });
  



