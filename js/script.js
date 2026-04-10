const navLinks = document.querySelectorAll("#nav-links a");
const navbar = document.querySelector("nav")

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetHref = this.getAttribute("href");

        if (targetHref === "#hero") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        // normal section scroll //
        const targetId = targetHref.substring(1);
        const targetEl = document.getElementById(targetId);

        if (!targetEl) return;

        const navbarHeight = navbar.offsetHeight;

        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});