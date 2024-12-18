document.addEventListener("DOMContentLoaded", () => {
    fetch("partials/header.html")
        .then(res => res.text())
        .then(data => document.getElementById("header").innerHTML = data)
        .then(() => console.log("Header loaded successfully."))
        .catch(err => console.error("Error loading header:", err));

    fetch("partials/footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("footer").innerHTML = data)
        .then(() => console.log("Footer loaded successfully."))
        .catch(err => console.error("Error loading footer:", err));
});

<script>
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add the 'show' class
            }
        });
    });

    // Observe the custom section
    const section = document.querySelector('.custom-highlight-section');
    observer.observe(section);
});
</script>


document.addEventListener("DOMContentLoaded", function () {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeIns.forEach((element) => observer.observe(element));
});
