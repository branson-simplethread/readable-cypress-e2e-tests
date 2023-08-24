document.addEventListener("DOMContentLoaded", function(_event) {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    ['input','textarea'].forEach(tag => {
      form.querySelectorAll(tag).forEach(i => {
        i.setAttribute('disabled', true)
      })
    });
    const toastEl = document.querySelector('.toast');
    const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
    toast.show();
  });
});
