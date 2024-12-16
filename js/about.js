// About.js: Contains code specific to the About page

// Function to render the About page content
function renderAboutContent() {
    return `
        <main class="container my-5">
            <section>
                <h2 class="text-center" data-aos="fade-up">Who We Are</h2>
                <p class="lead text-center" data-aos="fade-up">
                    Our journey begins with our founder, Mr. Adhish Lama, who traveled to the United States in January 2015, embarking on the same path many Nepali students take today. 
                    With firsthand experience of the challenges faced by international students—adapting to a new education system, understanding work culture, and maintaining F-1 visa status—Mr. Lama witnessed the struggles of many Nepali students who lacked proper guidance and preparation for life in the U.S.
                </p>
                <p class="lead text-center" data-aos="fade-up">
                    Leveraging his extensive network in the U.S., Mr. Lama supported countless international students by providing them with proper guidance and actionable advice.
                </p>
                <p class="lead text-center" data-aos="fade-up">
                    At Aslat Guidance Education, we empower aspiring students to turn their dreams into reality. 
                </p>
            </section>

            <section class="my-5">
                <div class="row">
                    <div class="col-md-6" data-aos="fade-up">
                        <h3>Our Mission</h3>
                        <p>
                            To empower students by providing them with the resources, knowledge, and confidence they need
                            to pursue their education and build successful careers.
                        </p>
                    </div>
                    <div class="col-md-6" data-aos="fade-up">
                        <h3>Our Vision</h3>
                        <p>
                            To be a trusted partner for students worldwide, helping them unlock opportunities
                            at top universities and achieve their dreams.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h3 class="text-center" data-aos="fade-up">Meet Our Team</h3>
                <div class="row text-center my-4">
                    <div class="col-md-4" data-aos="fade-up">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Mr. Adhish Lama</h5>
                                <p class="card-text">Founder & CEO</p>
                                <p>With years of experience and a passion for helping students, Mr. Lama leads Aslat Guidance Education with a vision to empower international students worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4" data-aos="fade-up">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Jane Smith</h5>
                                <p class="card-text">Head of Counseling</p>
                                <p>Jane specializes in career guidance and test preparation, ensuring students excel in their academic pursuits.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4" data-aos="fade-up">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Alice Brown</h5>
                                <p class="card-text">Visa Specialist</p>
                                <p>Alice helps students navigate the visa process smoothly, with a 98% success rate for visa approvals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `;
}

// Function to initialize the About page
function initializeAboutPage() {
    const app = document.getElementById("app");
    app.innerHTML = `
        ${renderNavbar()} 
        ${renderAboutContent()} 
        ${renderFooter()}
    `;

    // Initialize AOS
    AOS.init({
        offset: 120,
        duration: 600,
        easing: "ease-in-out",
        delay: 100,
    });
}

// Call the function to initialize the page
initializeAboutPage();
