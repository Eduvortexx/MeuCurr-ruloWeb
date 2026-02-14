// =========================
// DARK MODE
// =========================
document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const trilho = document.getElementById("trilho");
    const darkBtn = document.getElementById("dark-mode-toggle");

    function toggleDarkMode() {
        body.classList.toggle("dark");
    }

    if (trilho) {
        trilho.addEventListener("click", () => {
            trilho.classList.toggle("dark");
            toggleDarkMode();
        });
    }

    if (darkBtn) {
        darkBtn.addEventListener("click", toggleDarkMode);
    }


    // =========================
    // ANIMAÇÃO DOS CARDS NO SCROLL
    // =========================
    const eventos = document.querySelectorAll(".timeline-event");

    if (eventos.length > 0) {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // anima só uma vez
                }
            });
        }, {
            threshold: 0.2
        });

        eventos.forEach((evento, index) => {
            evento.style.transitionDelay = `${index * 0.15}s`;
            observer.observe(evento);
        });
    }


    // =========================
    // GIF ANIMATION AO CLICAR NO MENU
    // =========================
    const gif = document.querySelector(".gif-apresentacao");
    const menuLinks = document.querySelectorAll(".menu-desktop a");

    if (gif && menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener("click", (e) => {

                e.preventDefault();

                gif.classList.add("fly-right");

                setTimeout(() => {
                    window.location.href = link.href;
                }, 1000);
            });
        });
    }

});
