// Custom logic for compare


const CARS = {
  tesla: {
    name:'2026 Tesla Model S Plaid',
    img:'../assets/images/car-tesla.jpg',
    specs:{
      Engine:'Tri-Motor Electric (1,020 hp)',
      Torque:'1424 Nm',
      '0-100 Km/h':'1.99s',
      'Top Speed':'322 km/h',
      Range:'637 km',
      Drivetrain:'All-Wheel Drive',
      Seating:'5',
      Price:'4,499,500 EGP',
      Insurance:'16,000 EGP/mo'
    }
  },

  porsche: {
    name:'Porsche Taycan',
    img:'../assets/images/porsche-taycan.jpg',
    specs:{
      Engine:'Dual-Motor Electric (750 hp)',
      Torque:'1049 Nm',
      '0-100 Km/h':'2.6s',
      'Top Speed':'259 km/h',
      Range:'365 km',
      Drivetrain:'All-Wheel Drive',
      Seating:'4',
      Price:'5,190,000 EGP',
      Insurance:'19,500 EGP/mo'
    }
  },

  ferrari: {
    name:'Ferrari F8 Tributo',
    img:'../assets/images/car-ferrari.jpg',
    specs:{
      Engine:'3.9L Twin-Turbo V8 (710 hp)',
      Torque:'770 Nm',
      '0-100 Km/h':'2.9s',
      'Top Speed':'340 km/h',
      Range:'N/A',
      Drivetrain:'Rear-Wheel Drive',
      Seating:'2',
      Price:'13,800,000 EGP',
      Insurance:'42,500 EGP/mo'
    }
  },

  porsche: {
    name:'2026 BMW X5 M Competition',
    img:'../assets/images/car-bmw.jpg',
    specs:{
      Engine:'4.4L Twin-Turbo V8 (617 hp)',
      Torque:'750 Nm',
      '0-100 Km/h':'3.8s',
      'Top Speed':'285 km/h',
      Range:'N/A',
      Drivetrain:'xDrive AWD',
      Seating:'5',
      Price:'5,705,000 EGP',
      Insurance:'21,000 EGP/mo'
    }
  },

  mustang: {
    name:'Ford Mustang Shelby GT500',
    img:'../assets/images/car-mustang.jpg',
    specs:{
      Engine:'5.2L Supercharged V8 (760 hp)',
      Torque:'847 Nm',
      '0-100 Km/h':'3.3s',
      'Top Speed':'290 km/h',
      Range:'N/A',
      Drivetrain:'Rear-Wheel Drive',
      Seating:'4',
      Price:'3,749,750 EGP',
      Insurance:'14,000 EGP/mo'
    }
  },

  BUGATTI: {
    name:'BUGATTI',
    img:'../assets/images/car-lambo.jpg',
    specs:{
      Engine:'4.0L Twin-Turbo V8 (666 hp)',
      Torque:'850 Nm',
      '0-100 Km/h':'3.5s',
      'Top Speed':'304 km/h',
      Range:'N/A',
      Drivetrain:'All-Wheel Drive',
      Seating:'5',
      Price:'11,474,750 EGP',
      Insurance:'39,000 EGP/mo'
    }
  },
};
    let selected = {1:'tesla',2:'BMW'};
    function setupSearch(num) {
      const input = document.getElementById('search'+num);
      const dropdown = document.getElementById('dropdown'+num);
      input.addEventListener('input', () => {
        const term = input.value.toLowerCase();
        if (!term) { dropdown.style.display='none'; return; }
        const matches = Object.entries(CARS).filter(([k,v]) => v.name.toLowerCase().includes(term));
        if (!matches.length) { dropdown.style.display='none'; return; }
        dropdown.innerHTML='';
        matches.forEach(([key,car]) => {
          const li = document.createElement('li');
          li.innerHTML=`<img src="${car.img}" alt="${car.name}"><span>${car.name}</span>`;
          li.addEventListener('click', () => {
            selected[num]=key; input.value=car.name; dropdown.style.display='none';
            document.getElementById('previewImg'+num).src=car.img;
            document.getElementById('previewName'+num).textContent=car.name;
          });
          dropdown.appendChild(li);
        });
        dropdown.style.display='block';
      });
      document.addEventListener('click', e => { if (!input.contains(e.target)&&!dropdown.contains(e.target)) dropdown.style.display='none'; });
    }
    function buildTable() {
      const c1=CARS[selected[1]], c2=CARS[selected[2]];
      const keys=Object.keys({...c1.specs,...c2.specs});
      let html=`<thead><tr><th>Specification</th><th>${c1.name}</th><th>${c2.name}</th></tr></thead><tbody>`;
      html+=`<tr><td>Photo</td><td><img src="${c1.img}" style="width:100%;max-width:200px;border-radius:8px;" alt="${c1.name}"></td><td><img src="${c2.img}" style="width:100%;max-width:200px;border-radius:8px;" alt="${c2.name}"></td></tr>`;
      keys.forEach(k => { html+=`<tr><td>${k}</td><td>${c1.specs[k]||'-'}</td><td>${c2.specs[k]||'-'}</td></tr>`; });
      html+='</tbody>';
      document.getElementById('compareTable').innerHTML=html;
      const wrap=document.getElementById('compareTableWrap');
      wrap.style.display='block';
      wrap.scrollIntoView({behavior:'smooth'});
    }
    setupSearch(1); setupSearch(2);
  







