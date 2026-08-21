const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent(`Enquiry for The Urban Forager - ${data.get('service')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\n\nMessage:\n${data.get('message') || ''}`
  );
  <a href="mailto:theurbanforagerofficial@gmail.com">
  theurbanforagerofficial@gmail.com
</a>
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
