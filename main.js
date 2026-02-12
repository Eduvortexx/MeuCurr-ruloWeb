const trilho = document.getElementById("trilho");
const body = document.body;

trilho.addEventListener("click", () => {
    trilho.classList.toggle("dark");
    body.classList.toggle("dark");
});
