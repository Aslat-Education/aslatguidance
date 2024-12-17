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
