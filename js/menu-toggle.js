const menu = document.querySelector('.menu');
const navUL = document.querySelector('nav ul');
const nav = document.querySelector('nav');









menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    navUL.classList.toggle('menu-active');
});