document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuToggle || !navLinks) {
        console.error("Navbar elements not found!");
        return;
    }

    // Toggle menu visibility on click
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked (optional)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

function click(){
    alert("Thank You for contacting with me!I will response you soon");
}

let btn = document.querySelector("button");
btn.addEventListener("click",click);