// Initialize AOS
AOS.init();

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
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element.getBoundingClientRect().top <= 100) {
      current = section;
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Shrink logo on scroll
  const logo = document.getElementById('logo');
  if (window.scrollY > 50) {
    logo.style.height = '64px';
  } else {
    logo.style.height = '88px';
  }
});

// Typewriter effect for subtitle
const subtitle = document.querySelector('.typewriter');
const text = "Expert guidance for Nepali students to the U.S., Australia, Canada, and the UK.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Toast-style confirmation for contact form
function submitForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg transition-opacity duration-300 opacity-0';
      toast.textContent = `Thank you, ${name}! We’ll contact you at ${email} soon.`;
      document.body.appendChild(toast);
      setTimeout(() => toast.style.opacity = '1', 10);
      setTimeout(() => toast.style.opacity = '0', 3000);
      setTimeout(() => document.body.removeChild(toast), 3300);

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  } else {
    alert('Please fill out all fields.');
  }
}
