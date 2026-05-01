/* cars.js - Browse Cars page logic */
document.addEventListener('DOMContentLoaded', () => {
  const gridViewBtn = document.getElementById('gridViewBtn');
  const listViewBtn = document.getElementById('listViewBtn');
  const carGrid = document.getElementById('carGrid');

  if (gridViewBtn && listViewBtn && carGrid) {
    gridViewBtn.addEventListener('click', () => carGrid.classList.remove('car-list-view'));
    listViewBtn.addEventListener('click', () => carGrid.classList.add('car-list-view'));
  }

  const searchInput = document.getElementById('carSearchInput');
  if (searchInput && carGrid) {
    searchInput.addEventListener('keyup', function() {
      const term = this.value.toLowerCase();
      carGrid.querySelectorAll('.car-card').forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        card.style.display = title.includes(term) ? '' : 'none';
      });
    });
  }
});
