// CONST and VAR declaration

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');
const navLink = document.querySelectorAll('.header-navItem');

// actions

burgerAction();

// functions declaration

function burgerAction () {
  burger.addEventListener('click', (event) => {
    nav.classList.toggle('hidden');
  });
  for (each of navLink) {
    each.addEventListener('click', (event) => {
      nav.classList.toggle('hidden');
    });
  }
}
