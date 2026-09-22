// =========================
// CARTA
// =========================

const letter = document.querySelector(".closed-letter");
const cover = document.querySelector(".letter-cover");
const letterContent = document.querySelector(".letter-content");


// =========================
// ABRIR CARTA
// =========================

letter.addEventListener("click", () => {

    letter.classList.add("opened");

    // Mostra o conteúdo da carta
    setTimeout(() => {
        letterContent.classList.add("visible");
    }, 600);

});


// =========================
// REVELAÇÃO DOS PARÁGRAFOS
// =========================

const paragraphs = document.querySelectorAll(
    ".letter-content p"
);


// Cria o observer que detecta
// quando cada parágrafo entra na tela

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                // Remove quando sai da tela,
                // permitindo que apareça novamente
                // quando voltar a rolar.

                entry.target.classList.remove("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Começa a observar cada parágrafo

paragraphs.forEach((paragraph) => {

    observer.observe(paragraph);

});