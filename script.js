// Netlify-aware form submission with AJAX and fallback
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('serviceForm');
  const successBox = document.getElementById('formSuccess');

  if (!form) return;

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // simple client-side validation
    const required = ['name', 'phone', 'address', 'tankType', 'capacity', 'date'];
    for (const field of required) {
      const el = form.elements[field];
      if (!el || !el.value.trim()) {
        alert('Please fill all required fields.');
        el && el.focus();
        return;
      }
    }

    // gather data (including hidden form-name for Netlify)
    const data = {};
    Array.from(new FormData(form)).forEach(([key, value]) => {
      data[key] = value;
    });

    // Show loading state on the submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    const origText = submitBtn ? submitBtn.innerHTML : null;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';
    }

    // Post using fetch in urlencoded form (Netlify supports this)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data)
    })
    .then(function (res) {
      if (res.ok) {
        // show in-page success message
        if (successBox) successBox.style.display = 'block';
        form.reset();
      } else {
        // fallback: try a normal POST (this will work if Netlify form is configured)
        form.submit();
      }
    })
    .catch(function (err) {
      console.error('Form submission error:', err);
      // fallback: normal submit
      form.submit();
    })
    .finally(function () {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }
    });
  });
});
