/*const navButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.header--nav');


navButton.addEventListener('click', () => {
    nav.classList.toggle('header--nav');
    const navButton = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.header--nav');
    
    navButton.addEventListener('click', () => {
        nav.classList.toggle('header--nav');
    });
})*/


const navButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.header--nav');

navButton.addEventListener('click', () => {
  nav.classList.toggle('nav-visible');
});
