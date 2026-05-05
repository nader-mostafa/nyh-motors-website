// Custom logic for brochures
document.addEventListener('DOMContentLoaded', () => {
    // Dynamically insert a search bar above the table
    const table = document.querySelector('.custom-table');
    if (table) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '🔍 Search brochures by model...';
        searchInput.className = 'search-box';
        searchInput.style.width = '100%';
        searchInput.style.maxWidth = '400px';
        searchInput.style.marginBottom = '1.5rem';
        searchInput.style.padding = '0.8rem 1.2rem';
        
        table.parentNode.insertBefore(searchInput, table);

        // Search filtering logic
        searchInput.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const modelName = row.cells[0].textContent.toLowerCase();
                if (modelName.includes(term)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
});
