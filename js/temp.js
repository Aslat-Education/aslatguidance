// Temp.js: Simple animation and interaction controls

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to ASLAT Guidance's Opening Soon Page!");

    // Button bounce effect (on click)
    const blogButton = document.querySelector('.blog-btn');
    blogButton.addEventListener('click', () => {
        blogButton.classList.add('bounce');
        setTimeout(() => {
            blogButton.classList.remove('bounce');
        }, 800);
    });
});

// Custom class for bounce
const style = document.createElement('style');
style.innerHTML = `
.bounce {
    animation: bounceOnce 0.8s;
}

@keyframes bounceOnce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}`;
document.head.appendChild(style);
