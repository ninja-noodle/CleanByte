// navbar links to section scroll
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

// navbar links active highlight
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

// Learn more to dropdown scroll
const card1LearnMore = document.getElementById('card1-learnmore');
const card2LearnMore = document.getElementById('card2-learnmore');
const card3LearnMore = document.getElementById('card3-learnmore');

const dropdown1Container = document.getElementById('dropdown1');
const dropdown1Checkbox = document.getElementById('touch1');

const dropdown2Container = document.getElementById('dropdown2');
const dropdown2Checkbox = document.getElementById('touch2');

const dropdown3Container = document.getElementById('dropdown3');
const dropdown3Checkbox = document.getElementById('touch3');

card1LearnMore.addEventListener('click', () => {
    dropdown1Container.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    setTimeout(() => {
        if (!dropdown1Checkbox.checked) {
            dropdown1Checkbox.checked = true;
        }
    }, 500);
});

card2LearnMore.addEventListener('click', () => {
    dropdown2Container.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    setTimeout(() => {
        if (!dropdown2Checkbox.checked) {
            dropdown2Checkbox.checked = true;
        }
    }, 500);
});

card3LearnMore.addEventListener('click', () => {
    dropdown3Container.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    setTimeout(() => {
        if (!dropdown3Checkbox.checked) {
            dropdown3Checkbox.checked = true;
        }
    }, 500);
});

// copyright year auto-changer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;