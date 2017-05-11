import 'whatwg-fetch';
import jump from 'jump.js';

// Menu Slider
const btn = document.querySelector('.menu-btn');
const body = document.querySelector('.outer-wrap');
const menu = document.querySelector('.section--menu');
const mid = document.querySelector('.ham--mid');
const top = document.querySelector('.ham--top');
const bottom = document.querySelector('.ham--bottom');
const hamWrap = document.querySelector('.ham--wrap');


btn.addEventListener('click', () => {
  console.log('This menu just a little bit a vanilla js that adds/removes classes.');

  if (menu.classList.contains('section--menu--open')) {
    body.classList.remove('outer-wrap--open');
    menu.classList.remove('section--menu--open');
    mid.classList.remove('ham--mid--open');
    top.classList.remove('ham--top--open');
    bottom.classList.remove('ham--bottom--open');
    hamWrap.classList.remove('ham--wrap--open');
  } else {
    body.classList.add('outer-wrap--open');
    menu.classList.add('section--menu--open');
    mid.classList.add('ham--mid--open');
    top.classList.add('ham--top--open');
    bottom.classList.add('ham--bottom--open');
    hamWrap.classList.add('ham--wrap--open');
  }
});


// Arrow scroll function
const element = document.querySelector('.hero__arrow');

element.addEventListener('click', () => {
  jump('.target', {
    offset: -59,
    callback: () => console.log('Hey! Thanks for caring enough to check this out! I used jump.js for that fancy scroll you just saw. Thanks, Michael! You can check his work out here: https://github.com/callmecavs/jump.js')
  });
});
