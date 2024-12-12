// Example of a simple JavaScript interaction
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "yellow";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });
});
