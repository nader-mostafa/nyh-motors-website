/* â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• 
   main.js - Global logic (Theme & Layout Toggle)
   â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  */
document.addEventListener('DOMContentLoaded', () => {

  // â”€â”€ Theme Switcher â”€â”€
  const themeSelect = document.getElementById('themeSelect');
  const savedTheme = localStorage.getItem('theme') || 'dark-blue';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeSelect) {
    themeSelect.value = savedTheme;
    themeSelect.addEventListener('change', (e) => {
      const next = e.target.value;
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // â”€â”€ Layout Toggle â”€â”€
  const layoutToggleBtn = document.getElementById('layoutToggleBtn');
  const savedLayout = localStorage.getItem('layout') || 'topbar';
  
  if (savedLayout === 'sidebar') {
    document.body.classList.remove('layout-topbar');
    document.body.classList.add('layout-sidebar');
  } else {
    document.body.classList.remove('layout-sidebar');
    document.body.classList.add('layout-topbar');
  }

  if (layoutToggleBtn) {
    layoutToggleBtn.addEventListener('click', () => {
      if (document.body.classList.contains('layout-sidebar')) {
        document.body.classList.replace('layout-sidebar', 'layout-topbar');
        localStorage.setItem('layout', 'topbar');
      } else {
        document.body.classList.replace('layout-topbar', 'layout-sidebar');
        localStorage.setItem('layout', 'sidebar');
      }
    });
  }

  // â”€â”€ Sidebar: Dropdown toggle â”€â”€
  document.querySelectorAll('.main-nav .dropdown > a').forEach(trigger => {
    trigger.addEventListener('click', e => {
      if (!document.body.classList.contains('layout-sidebar')) return;
      e.preventDefault();
      const li = trigger.closest('.dropdown');
      li.classList.toggle('open');
    });
  });

  // â”€â”€ Smooth Scroll Fade-In â”€â”€
  const fadeElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(el => observer.observe(el));

});



    // ==========================================
// GLOBAL AUTHENTICATION STATE LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const authBtn = document.querySelector('a[href*="login.html"]');
    if (authBtn) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            // User is logged in
            authBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Logout';
            
            // Show Admin Panel ONLY if they logged in with the admin credentials
            const adminNav = document.getElementById('adminNavItem');
            if (adminNav && localStorage.getItem('isAdmin') === 'true') {
                adminNav.style.display = 'inline-block';
            }

            authBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('isAdmin');
                window.location.href = '../login/login.html';
            });
        } else {
            // User is logged out
            authBtn.innerHTML = 'Login';
        }
    }
});
