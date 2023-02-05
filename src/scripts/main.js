// CONST and VAR declaration

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');
const navLink = document.querySelectorAll('.header-navItem');
const submit = document.querySelector('#form-button');
const input = document.querySelector('#input');

// actions

burgerAction();
submitAction();

// functions declaration

function burgerAction () {
  burger.addEventListener('click', (event) => {
    nav.classList.toggle('hidden--toggle');
  });
  for (each of navLink) {
    each.addEventListener('click', (event) => {
      nav.classList.toggle('hidden--toggle');
    });
  }
}

function submitAction () {
  submit.addEventListener('click', () => {
    input.value = "thank you for submitting the form";
  });
}
