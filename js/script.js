const burguer = document.querySelector('.img__menu');
const navMobile = document.querySelector('.menu__oculto');
const overlay = document.querySelector('.overlay');

burguer.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    navMobile.classList.remove('active');
    overlay.classList.remove('active');
});

document.querySelectorAll(".oculto__movil a").forEach(link => {
  link.addEventListener("click", () => {
    navMobile.classList.remove("active");
    overlay.classList.remove("active");
});

document.querySelector(".cerrar").addEventListener("click", () => {
    navMobile.classList.remove("active");
    overlay.classList.remove("active");
});

});