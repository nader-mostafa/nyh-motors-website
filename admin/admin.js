// Custom logic for admin


    // Show admin content only if isAdmin is true
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
      document.getElementById('adminContent').style.display = 'block';
    } else {
      document.getElementById('accessDenied').style.display = 'flex';
    }
  



