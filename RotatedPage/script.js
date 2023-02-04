const header = document.querySelector('header');
const openMenuBtn = document.querySelector('.open-menu-icon');
const closeMenuBtn = document.querySelector('.close-menu-icon');
const mainPage = document.querySelector('.outer-block-container');
openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    header.classList.toggle('active');
    mainPage.classList.toggle('active');
};