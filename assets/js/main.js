// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = ['services', 'why-aslat', 'post-departure', 'contact'];
  let current = '';
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element.getBoundingClientRect().top <= 100) {
      current = section;
    }
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form submission placeholder (no backend, shows alert)
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon at ' + email + '.');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill out all fields.');
  }
}
