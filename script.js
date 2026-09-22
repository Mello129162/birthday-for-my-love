// =========================
// CARTA
// =========================

const letter = document.querySelector(".closed-letter");
const letterContent = document.querySelector(".letter-content");


// =========================
// ABRIR CARTA
// =========================

letter.addEventListener("click", () => {

    // Evita abrir novamente
    if (letter.classList.contains("opened")) return;

    // Abre a carta
    letter.classList.add("opened");

    // Começa a observar os parágrafos
    setTimeout(() => {
        paragraphs.forEach((paragraph) => {
            observer.observe(paragraph);
        });
    }, 800);

});


// =========================
// PARÁGRAFOS
// =========================

const paragraphs = document.querySelectorAll(
    ".letter-content p"
);


// =========================
// EFEITO DE APARECER / SUMIR
// =========================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                // Entrou na tela
                entry.target.classList.add("show");

            } else {

                // Saiu da tela
                entry.target.classList.remove("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);