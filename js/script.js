// =========================
// MOBILE MENU FUNCTIONALITY
// =========================

const navLinks = document.querySelector(".nav-links");


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("section");

const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 150) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});
