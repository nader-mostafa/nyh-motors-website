/* main.js - Global logic */
document.addEventListener('DOMContentLoaded', () => {

  // ── Admin Role: show/hide Admin Panel nav item ──
  const adminNavItem = document.getElementById('adminNavItem');
  if (adminNavItem) {
    if (localStorage.getItem('userRole') === 'admin') {
      adminNavItem.style.display = '';
    } else {
      adminNavItem.style.display = 'none';
    }
  }

  // ── Theme Toggle ──
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // ── Layout Toggle ──
  const layoutToggleBtn = document.getElementById('layoutToggleBtn');
  const savedLayout = localStorage.getItem('layout');
  if (savedLayout === 'sidebar') {
    document.body.classList.remove('layout-topbar');
    document.body.classList.add('layout-sidebar');
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

  // ── Sidebar: click-to-toggle dropdowns (hover doesn't work well vertically) ──
  document.querySelectorAll('.main-nav .dropdown > a').forEach(trigger => {
    trigger.addEventListener('click', e => {
      if (!document.body.classList.contains('layout-sidebar')) return;
      e.preventDefault();
      const li = trigger.closest('.dropdown');
      li.classList.toggle('open');
    });
  });

  // ── Close sidebar when clicking outside it ──
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('layout-sidebar')) return;
    const header = document.querySelector('.main-header');
    if (header && !header.contains(e.target)) {
      document.body.classList.replace('layout-sidebar', 'layout-topbar');
      localStorage.setItem('layout', 'topbar');
    }
  });

  // ── Accordion (smooth height) ──
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('active');
      // Close all in same accordion
      const acc = header.closest('.accordion');
      if (acc) {
        acc.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
        acc.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('open'));
      }
      if (!isOpen) {
        content.classList.add('active');
        header.classList.add('open');
      }
    });
  });

  // ── Tabs ──
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const scope = btn.closest('[data-tabs]') || btn.closest('main');
      scope.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      scope.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.getAttribute('data-target'));
      if (target) target.classList.add('active');
    });
  });

  // ── Carousel ──
  document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const track = wrapper.querySelector('.carousel-track');
    const slides = wrapper.querySelectorAll('.carousel-slide');
    const prevBtn = wrapper.querySelector('.carousel-btn.prev');
    const nextBtn = wrapper.querySelector('.carousel-btn.next');
    const dotsContainer = wrapper.querySelector('.carousel-dots');
    if (!track || slides.length === 0) return;

    let current = 0;
    const total = slides.length;
    let autoTimer;

    // Build dots
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === current));
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

    function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 4500); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }
    startAuto();
  });

});
