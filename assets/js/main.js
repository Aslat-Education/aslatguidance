// Main JavaScript File

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const phone = document.querySelector("#phone").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (!name || !email || !phone || !message) {
                alert("Please fill out all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        });
    }
});

// Email Validation Helper Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
