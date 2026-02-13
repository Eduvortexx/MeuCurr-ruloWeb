// =========================
// TRILHO DARK MODE
// =========================
let trilho = document.getElementById("trilho");
let body = document.querySelector("body");

if (trilho) {
    trilho.addEventListener("click", () => {
        trilho.classList.toggle("dark");
        body.classList.toggle("dark");
    });
}

// =========================
// BOTÃO DARK MODE (opcional)
// =========================
let darkBtn = document.getElementById("dark-mode-toggle");
if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
    });
}

// =========================
// GIF ANIMATION AO CLICAR NO MENU
// =========================
window.addEventListener('load', () => {
    const gif = document.querySelector('.gif-apresentacao');
    const menuLinks = document.querySelectorAll('.menu-desktop a');

    if (gif && menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // impede que a página recarregue antes da animação
                e.preventDefault();

                // anima o GIF
                gif.classList.add('fly-right');

                // depois de 1s, navega para a página clicada
                setTimeout(() => {
                    window.location.href = link.href;
                }, 1000); // o mesmo tempo da animação
            });
        });
    }
});
