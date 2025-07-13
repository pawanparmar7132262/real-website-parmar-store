document.addEventListener('DOMContentLoaded', () => {
  // Load settings
  document.getElementById('themeSelect').value = localStorage.getItem('theme') || 'light';
  document.getElementById('langSelect').value = localStorage.getItem('language') || 'hi';

  // Load profile
  const user = JSON.parse(localStorage.getItem('userData') || '{}');
  document.getElementById('name').value = user.name || '';
  document.getElementById('email').value = user.email || '';
});

document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  localStorage.setItem('userData', JSON.stringify({ name, email }));
  alert('🎉 प्रोफ़ाइल सेव हो गई!');
});

document.getElementById('themeSelect').addEventListener('change', function () {
  localStorage.setItem('theme', this.value);
});

document.getElementById('langSelect').addEventListener('change', function () {
  localStorage.setItem('language', this.value);
});

function logout() {
  localStorage.clear();
  alert('🚪 आप लॉगआउट हो चुके हैं');
  window.location.href = 'index.html';
}

