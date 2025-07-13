// Check if account is created (👈 आपके द्वारा भेजा गया कोड)
document.addEventListener('DOMContentLoaded', function () {
  const isAccountCreated = localStorage.getItem("accountCreated");

  const accountBtn = document.getElementById("account-btn");
  const accountLink = document.getElementById("account-link");

  if (accountBtn && accountLink) {
    if (isAccountCreated === "true") {
      accountBtn.textContent = "Your Profile";
      accountLink.href = "setting.html";  // 👉 प्रोफ़ाइल पेज
    } else {
      accountBtn.textContent = "Create Your Account";
      accountLink.href = "account.html";  // 👉 अकाउंट बनाने वाला पेज
    }
  }

  // Footer year update
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Dark mode setting
  if(localStorage.getItem('setting_dark') === 'true') {
    document.body.style.background = '#222';
    document.body.style.color = '#fff';
  } else {
    document.body.style.background = 'linear-gradient(135deg, #ffe0f0 0%, #f8bbd0 50%, #fce4ec 100%)';
    document.body.style.color = '#222';
  }

  // Login Modal Logic
  const loginModal = document.getElementById('loginModal');
  const mainContent = document.getElementById('mainContent');
  const loginSubmit = document.getElementById('loginSubmit');
  const loginError = document.getElementById('loginError');

  if (loginModal && mainContent && loginSubmit) {
    loginSubmit.addEventListener('click', function() {
      const username = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value;
      // Demo credentials
      if (username === 'user' && password === '1234') {
        loginModal.style.display = 'none';
        mainContent.style.display = 'block';
      } else {
        loginError.textContent = 'गलत Username या Password!';
        loginError.style.display = 'block';
      }
    });

    // Allow Enter key
    loginModal.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') loginSubmit.click();
    });
  }
});

// 🔍 Search filter logic
function searchApps() {
  const input = document.getElementById('searchBar').value.trim().toLowerCase();
  const cards = Array.from(document.querySelectorAll('.card'));
  const siteTitle = document.title.replace(/^[^a-zA-Z0-9]+/, '').trim();
  let siteCard = null;

  // Try to find a card that matches the site title (if any)
  cards.forEach(c => {
    const name = c.querySelector('h2').textContent.trim().toLowerCase();
    if (name === siteTitle.toLowerCase()) {
      siteCard = c;
    }
  });

  if (!input) {
    cards.forEach(c => {
      c.style.display = 'flex';
      c.classList.remove('highlight');
    });
    return;
  }

  const exactMatches = cards.filter(c => c.querySelector('h2').textContent.trim().toLowerCase() === input);
  const partialMatches = cards.filter(c => {
    const name = c.querySelector('h2').textContent.trim().toLowerCase();
    return name.includes(input) && name !== input;
  });

  cards.forEach(c => {
    c.style.display = 'none';
    c.classList.remove('highlight');
  });

  if (siteCard && (siteTitle.toLowerCase() === input || siteTitle.toLowerCase().includes(input))) {
    siteCard.style.display = 'flex';
    siteCard.classList.add('highlight');
    siteCard.parentNode.prepend(siteCard);
  }

  exactMatches.forEach(c => {
    if (c !== siteCard) {
      c.style.display = 'flex';
      c.classList.add('highlight');
      c.parentNode.prepend(c);
    }
  });

  partialMatches.forEach(c => {
    if (c !== siteCard) {
      c.style.display = 'flex';
      c.classList.remove('highlight');
      c.parentNode.appendChild(c);
    }
  });

  const visible = [siteCard, ...exactMatches, ...partialMatches].filter(Boolean).filter(c => c.style.display === 'flex');
  if (visible.length > 0) {
    setTimeout(() => {
      visible[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';

  if (theme === 'dark') {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#fff';
  } else {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000';
  }
});
function copyUPI() {
  const upi = "7508017231@fam";
  navigator.clipboard.writeText(upi).then(() => {
    document.getElementById("copyMsg").style.display = "block";
    setTimeout(() => {
      document.getElementById("copyMsg").style.display = "none";
    }, 2000);
  });
}
