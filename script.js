const reveals = document.querySelectorAll(".reveal");
const cards = document.querySelectorAll(".card");
const fotos = document.querySelectorAll(".foto");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - revealPoint) {
            card.classList.add("active");
        }
    });

    fotos.forEach(foto => {
        const fotoTop = foto.getBoundingClientRect().top;

        if (fotoTop < windowHeight - revealPoint) {
            foto.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
