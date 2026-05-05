// Custom logic for blog



document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children || []);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  if (!track || slides.length === 0) return;

  let currentIndex = 0;

  // Create dots
  slides.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function updateDots() {
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  function goToSlide(index) {
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    currentIndex = index;
    updateDots();
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 5000);
});
