particlesJS("particles-js", {
    particles: {
        number: { value: 80 }, // Number of particles
        color: { value: "#ffffff" }, // Color of particles
        shape: { type: "circle" }, // Shape: circle, edge, triangle, etc.
        opacity: { value: 0.5 }, // Opacity of particles
        size: { value: 3 }, // Size of particles
        move: { speed: 2 }, // Speed of particle movement
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }, // Repulse particles on hover
            onclick: { enable: true, mode: "push" }, // Add particles on click
        },
        modes: {
            repulse: { distance: 100 }, // Distance for repulsion
            push: { particles_nb: 4 }, // Number of particles added on click
        },
    },
});
