// Custom logic for car-details


  // Brochure assignment
  const BROCHURE_MAP = {
    tesla:   'tesla',
    porsche: 'porsche',
    ferrari: 'ferrari',
    bmw:     'bmw_x5',
    mustang: 'mustang',
    BUGATTI: 'bugatti'
  };
  
  const BROCHURE_FILES = {
    tesla:       '../brochures/tesla-model-s.pdf',
    porsche:     '../brochures/porsche-taycan brochure.pdf',
    ferrari:     '../brochures/cs_reveal_ferrari_f8_tributo_gbr.pdf',
    bmw_x5:      '../brochures/The_new_X5_Brochure.pdf.asset.1697549636826.pdf',
    mustang:     '../brochures/ford-caribbean-mustang-2022-brochure-download-eng.pdf',
    bugatti:     '../brochures/Bugatti-EB-16.4-Veyron-2007.pdf'
  };
  
  const BROCHURE_LABELS = {
    tesla:       'Tesla Model S Plaid Brochure',
    porsche:     'Porsche Taycan Brochure',
    ferrari:     'Ferrari F8 Tributo Brochure',
    bmw_x5:      'BMW X5 M Competition Brochure',
    mustang:     'Ford Mustang Shelby GT500 Brochure',
    bugatti:     'BUGATTI Brochure'
  };

  // Sound: cars 1&2 share sound-1, cars 3&4 share sound-2, 5&6 share sound-1
const SOUND_MAP = { get(key) { return '../assets/engine-sound-2.mp4'; } };

const CARS = {
  tesla: {
    title: '2026 Tesla Model S Plaid',
    tagline: 'Electric performance redefined',
    img: '../assets/images/car-tesla.jpg',
    price: 4499500, insurance: 16000,
    specs: [
      ['Make / Model','2026 Tesla Model S Plaid'],
      ['Engine','Tri-Motor Electric (1,020 hp)'],
      ['Torque','1424 Nm'],
      ['Range','637 km'],
      ['0–100 km/h','1.99 seconds'],
      ['Top Speed','322 km/h'],
      ['Drivetrain','All-Wheel Drive'],
      ['Seating','5 passengers'],
      ['Cargo','793 L'],
      ['Charging','Up to 250 kW Supercharging']
    ],
    insurance_detail: { basic:16000, premium:26000, desc:'Comprehensive EV coverage with roadside & battery protection.' },
  },

  porsche: {
    title: 'Porsche Taycan',
    tagline: 'The soul of a sports car, electrified',
    img: '../assets/images/porsche-taycan.jpg',
    price: 9000000, insurance: 19500,
    specs: [
      ['Make / Model','Porsche Taycan'],
      ['Engine','Dual-Motor Electric (750 hp)'],
      ['Torque','1049 Nm'],
      ['Range','365 km'],
      ['0–100 km/h','2.6 seconds'],
      ['Top Speed','259 km/h'],
      ['Drivetrain','All-Wheel Drive'],
      ['Seating','4 passengers'],
      ['Cargo','405 L'],
      ['Charging','Up to 270 kW DC Fast Charge']
    ],
    insurance_detail: { basic:19500, premium:31000, desc:'Premium luxury EV coverage with concierge service.' },
  },

  ferrari: {
    title: 'Ferrari F8 Tributo',
    tagline: 'The most powerful V8 in Ferrari history',
    img: '../assets/images/car-ferrari.jpg',
    price: 13800000, insurance: 42500,
    specs: [
      ['Make / Model','Ferrari F8 Tributo'],
      ['Engine','3.9L Twin-Turbo V8 (710 hp)'],
      ['Torque','770 Nm'],
      ['0–100 km/h','2.9 seconds'],
      ['Top Speed','340 km/h'],
      ['Drivetrain','Rear-Wheel Drive'],
      ['Transmission','7-speed Dual-Clutch'],
      ['Seating','2 passengers'],
      ['Weight','1435 kg'],
      ['Origin','Maranello, Italy']
    ],
    insurance_detail: { basic:42500, premium:70000, desc:'Exotic car specialist coverage with track day options.' },
  },

  bmw: {
    title: '2026 BMW X5 M Competition',
    tagline: 'Ultimate performance in an SUV',
    img: '../assets/images/car-bmw.jpg',
    price: 5705000, insurance: 21000,
    specs: [
      ['Make / Model','2026 BMW X5 M Competition'],
      ['Engine','4.4L Twin-Turbo V8 (617 hp)'],
      ['Torque','750 Nm'],
      ['0–100 km/h','3.8 seconds'],
      ['Top Speed','285 km/h'],
      ['Drivetrain','xDrive All-Wheel Drive'],
      ['Transmission','8-speed Automatic'],
      ['Seating','5 passengers'],
      ['Cargo','960 L'],
      ['Origin','Munich, Germany']
    ],
    insurance_detail: { basic:21000, premium:34000, desc:'M-model specialist coverage with performance driving protection.' },
  },

  mustang: {
    title: 'Ford Mustang Shelby GT500',
    tagline: 'American muscle, legendary heritage',
    img: '../assets/images/car-mustang.jpg',
    price: 3749750, insurance: 14000,
    specs: [
      ['Make / Model','Ford Mustang Shelby GT500'],
      ['Engine','5.2L Supercharged V8 (760 hp)'],
      ['Torque','847 Nm'],
      ['0–100 km/h','3.3 seconds'],
      ['Top Speed','290 km/h'],
      ['Drivetrain','Rear-Wheel Drive'],
      ['Transmission','7-speed Dual-Clutch'],
      ['Seating','4 passengers'],
      ['Weight','1916 kg'],
      ['Origin','Flat Rock, Michigan, USA']
    ],
    insurance_detail: { basic:14000, premium:23000, desc:'Performance muscle car coverage with track liability options.' },
  },

  BUGATTI: {
    title: 'BUGATTI',
    tagline: 'The super SUV reinvented',
    img: '../assets/images/car-lambo.jpg',
    price: 11474750, insurance: 39000,
    specs: [
      ['Make / Model','BUGATTI'],
      ['Engine','4.0L Twin-Turbo V8 (666 hp)'],
      ['Torque','850 Nm'],
      ['0–100 km/h','3.5 seconds'],
      ['Top Speed','304 km/h'],
      ['Drivetrain','All-Wheel Drive'],
      ['Transmission','8-speed Automatic'],
      ['Seating','5 passengers'],
      ['Cargo','617 L'],
      ['Origin',"Sant'Agata Bolognese, Italy"]
    ],
    insurance_detail: { basic:39000, premium:62500, desc:'Exotic SUV coverage with worldwide protection and concierge.' },
  },
};

  function getCarKey() {
    return new URLSearchParams(location.search).get('car') || 'tesla';
  }

  function loadCar() {
    const key = getCarKey();
    const car = CARS[key] || CARS.tesla;

    document.title = car.title + ' — NYH Motors';
    document.getElementById('carTitle').textContent = car.title;
    document.getElementById('carTagline').textContent = car.tagline;
    document.getElementById('carHeroImg').src = car.img;
    document.getElementById('carHeroImg').alt = car.title;
    document.getElementById('carPrice').textContent = car.price.toLocaleString() + ' EGP';
    document.getElementById('loanPrice').value = car.price;
    document.getElementById('loanInsurance').value = car.insurance;

    // Specs table
    let html = '<table class="spec-table">';
    car.specs.forEach(([k,v]) => { html += `<tr><td>${k}</td><td>${v}</td></tr>`; });
    html += '</table>';
    document.getElementById('specContent').innerHTML = html;

    // Insurance
    const ins = car.insurance_detail;
    document.getElementById('insuranceContent').innerHTML = `
      <p style="color:#888;margin-bottom:1.2rem;">${ins.desc}</p>
      <div class="insurance-grid">
        <div class="insurance-box">
          <h4>Basic Coverage</h4>
          <p style="color:#888;font-size:.85rem;">Liability &amp; collision protection</p>
          <div class="ins-price">${ins.basic.toLocaleString()} EGP<span style="font-size:.8rem;color:#888;">/mo</span></div>
        </div>
        <div class="insurance-box featured">
          <h4>Premium Coverage <span class="badge badge-new" style="margin-left:.4rem;">Recommended</span></h4>
          <p style="color:#888;font-size:.85rem;">Full comprehensive + roadside assist</p>
          <div class="ins-price">${ins.premium.toLocaleString()} EGP<span style="font-size:.8rem;color:#888;">/mo</span></div>
        </div>
      </div>`;

    // Audio
    const audioEl = document.getElementById('carAudio');
    audioEl.src = SOUND_MAP.get(key);
    audioEl.load();

    // Store brochure info
    window._brochureType = BROCHURE_MAP[key];

    // Update Test Drive link
    const tdBtn = document.querySelector('a[href*="test-drive.html"]');
    if (tdBtn) {
        tdBtn.href = '../test-drive/test-drive.html?car=' + key;
    }
  }

  function calcLoan() {
    const price = parseFloat(document.getElementById('loanPrice').value);
    const insurance = parseFloat(document.getElementById('loanInsurance').value);
    let months = parseInt(document.getElementById('loanMonths').value);
    const rate = parseFloat(document.getElementById('loanRate').value) / 100 / 12;
    if (months > 12) { months = 12; document.getElementById('loanMonths').value = 12; }
    if (months < 1) { months = 1; document.getElementById('loanMonths').value = 1; }
    const x = Math.pow(1 + rate, months);
    const monthlyLoan = (price * x * rate) / (x - 1);
    const total = monthlyLoan + insurance;
    const el = document.getElementById('calcResult');
    el.style.display = 'block';
    el.innerHTML = `<div style="font-size:.82rem;opacity:.75;margin-bottom:.3rem;">Monthly Payment (${months} months)</div>
      <div style="font-size:.9rem;">Loan: ${monthlyLoan.toFixed(2)} EGP + Insurance: ${insurance.toFixed(2)} EGP</div>
      <div style="font-size:1.4rem;margin-top:.4rem;">Total: ${total.toFixed(2)} EGP<span style="font-size:.8rem;opacity:.7;">/mo</span></div>`;
  }

  function previewBrochure() {
    const type = window._brochureType || 'kia';
    const file = BROCHURE_FILES[type];
    document.getElementById('brochureFrame').src = file;
    document.getElementById('brochureTitle').innerHTML = `<i class="fa-solid fa-file-pdf" style="color:var(--accent-color);margin-right:.5rem;"></i> ${BROCHURE_LABELS[type]}`;
    document.getElementById('brochureModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeBrochure() {
    document.getElementById('brochureModal').classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { document.getElementById('brochureFrame').src = ''; }, 350);
  }

  function downloadBrochure() {
    const type = window._brochureType || 'kia';
    const file = BROCHURE_FILES[type];
    const a = document.createElement('a');
    a.href = file;
    a.download = BROCHURE_LABELS[type].replace(/ /g, '_') + '.pdf';
    a.click();
  }

  document.getElementById('brochureModal').addEventListener('click', function(e) {
    if (e.target === this) closeBrochure();
  });

  loadCar();
  












