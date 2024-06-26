const h1 = document.querySelector(".card-text-h1");
const p = document.querySelector(".card-text-p");

h1.addEventListener("click", () => {
  p.classList.toggle("hide");
});
