document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('serviceForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      form.reset();
      if (success) success.style.display = 'block';
    } catch (err) {
      alert("Sorry, something went wrong sending your request. Please call or WhatsApp us instead.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
});
