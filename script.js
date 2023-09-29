// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to scroll to a section when a navigation link is clicked
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Add click event listeners for navigation links
    const originsLink = document.querySelector("#origins-link");
    const backgroundLink = document.querySelector("#background-link");
    const zeusLink = document.querySelector("#zeus-link");
    const apollodorusLink = document.querySelector("#apollodorus-link");

    if (originsLink) {
        originsLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#origins");
        });
    }

    if (backgroundLink) {
        backgroundLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#background");
        });
    }

    if (zeusLink) {
        zeusLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#zeus");
        });
    }

    if (apollodorusLink) {
        apollodorusLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#apollodorus");
        });
    }
});
