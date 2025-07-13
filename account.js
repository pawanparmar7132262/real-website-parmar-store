document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('accountForm');
  const successMsg = document.getElementById('successMsg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const userData = {
      name: name,
      email: email,
      password: password // ⚠️ डेमो है, असली ऐप में encrypt करें
    };

    // Save to localStorage
    localStorage.setItem('accountCreated', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));

    // Show success
    successMsg.style.display = 'block';

    // Redirect after delay
    setTimeout(() => {
      window.location.href = 'setting.html'; // प्रोफ़ाइल पेज
    }, 1500);
  });
});

