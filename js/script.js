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


// Dropdown auto collapse and contract
const checkboxes = [
    document.getElementById('touch1'),
    document.getElementById('touch2'),
    document.getElementById('touch3')
];

checkboxes.forEach(currentCheckbox => {
    currentCheckbox.addEventListener('change', () => {
        if (currentCheckbox.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== currentCheckbox) {
                    otherCheckbox.checked = false;
                }
            });

        }
    });
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

const allCheckboxes = [
    dropdown1Checkbox,
    dropdown2Checkbox,
    dropdown3Checkbox
];

function openDropdown(container, checkbox) {
    allCheckboxes.forEach(cb => {
        cb.checked = false;
    });
    container.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    setTimeout(() => {
        checkbox.checked = true;
    }, 500);
}

card1LearnMore.addEventListener('click', () => {
    openDropdown(dropdown1Container, dropdown1Checkbox);
});

card2LearnMore.addEventListener('click', () => {
    openDropdown(dropdown2Container, dropdown2Checkbox);
});

card3LearnMore.addEventListener('click', () => {
    openDropdown(dropdown3Container, dropdown3Checkbox);
});

// copyright year auto-changer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;