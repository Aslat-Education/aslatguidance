// Initialize AOS (Animate on Scroll)
AOS.init({
    offset: 120, // Offset from trigger point
    duration: 600, // Animation duration
    easing: "ease-in-out", // Easing for animations
    delay: 100, // Delay for each animation
});


// Function to render the header section
function renderHeader() {
    return `
        <div id="particles-js"></div>
        <header class="bg-primary text-white text-center py-5" style="position: relative;">
            
            <p id="dynamic-tagline" class="dynamic-text"></p>
        </header>
    `;
}


// Function to render the navigation bar
function renderNavbar() {
    return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold" href="index.html">AsLatEdu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

// Function to render the main content section
function renderMainContent() {
    return `
        <main class="container my-5">
            <div class="text-center" data-aos="fade-up">
                <h2>Welcome to Aslat Guidance</h2>
                <p class="lead">We provide professional guidance for your education and career success.</p>
            </div>
            <div class="row text-center my-4">
                ${renderServices()}
            </div>
            <div class="container my-5">
                <div class="text-center" data-aos="fade-up">
                    <h3>Scholarships Based on Your Test Scores</h3>
                    <p>Unlock opportunities at top colleges and universities with high scores on SAT, GRE, and GMAT.</p>
                </div>
                <div class="row text-center my-4">
                    ${renderScholarships()}
                </div>
            </div>
        </main>
    `;
}

// Function to render the footer section
function renderFooter() {
    return `
        <footer class="bg-dark text-white text-center py-3">
            <p>&copy; 2024 Aslat Guidance Education. All rights reserved.</p>
            <p>Follow us: 
                <a href="#" class="text-white">Facebook</a> | 
                <a href="#" class="text-white">Twitter</a> | 
                <a href="#" class="text-white">LinkedIn</a>
            </p>
        </footer>
    `;
}

// Function to render the services section
function renderServices() {
    const services = [
        {
            title: "Test Preparation",
            description: "Get ready for IELTS, TOEFL, GRE, and GMAT with our expert training programs.",
        },
        {
            title: "College Applications",
            description: "Expert advice to help you get into your dream college.",
        },
        {
            title: "Visa Assistance",
            description: "Hassle-free visa application guidance to help you study abroad.",
        },
    ];

    return services
        .map(
            (service) => `
            <div class="col-md-4" data-aos="fade-up">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${service.title}</h5>
                        <p class="card-text">${service.description}</p>
                    </div>
                </div>
            </div>
        `
        )
        .join("");
}

// Function to render the scholarships section
function renderScholarships() {
    const scholarships = [
        {
            title: "SAT Scholarships",
            description: "Achieve high SAT scores and apply to prestigious universities such as Harvard, Stanford, and MIT.",
        },
        {
            title: "GRE Scholarships",
            description: "Secure GRE-based scholarships for graduate programs at top institutions like Columbia University and UC Berkeley.",
        },
        {
            title: "GMAT Scholarships",
            description: "Leverage your GMAT score to access MBA scholarships at Wharton, INSEAD, and London Business School.",
        },
    ];

    return scholarships
        .map(
            (scholarship) => `
            <div class="col-md-4" data-aos="fade-up">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${scholarship.title}</h5>
                        <p class="card-text">${scholarship.description}</p>
                    </div>
                </div>
            </div>
        `
        )
        .join("");
}

// Function to initialize Particles.js with geometric animation
function initializeParticles() {
    tsParticles.load("particles-js", {
        particles: {
            number: { value: 50 },
            color: { value: ["#ff6f61", "#ffcc5c", "#88d8b0"] },
            shape: {
                type: ["triangle", "circle", "polygon"],
                polygon: { nb_sides: 6 },
            },
            opacity: {
                value: 0.7,
                random: true,
            },
            size: {
                value: 30,
                random: { enable: true, minimumValue: 10 },
            },
            move: {
                enable: true,
                speed: 1.5,
                random: true,
            },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
            },
        },
        background: { color: "#f7f4ed" },
    });
}

// Function to initialize Typed.js
function initializeTyped() {
    new Typed("#dynamic-tagline", {
        strings: [
            "Your Gateway to Educational Success",
            "Achieve Your Dreams with Confidence",
            "Start Your Journey with Aslat Guidance",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
    });
}

// Function to render the entire app
function renderApp() {
    const app = document.getElementById("app");
    app.innerHTML = `
        ${renderHeader()}
        ${renderNavbar()}
        ${renderMainContent()}
        ${renderFooter()}
    `;

    // Initialize third-party libraries
    initializeParticles();
    initializeTyped();
}

// Render the app
renderApp();
