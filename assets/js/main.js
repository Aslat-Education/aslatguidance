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
});

// Form submission with validation
function submitForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      alert(`Thank you, ${name}! We will contact you at ${email} soon.`);
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

// Ensure video plays on load
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('hero-video');
  if (video) {
    video.play().catch(error => {
      console.log('Video autoplay failed:', error);
    });
  }
});
