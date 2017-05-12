import 'whatwg-fetch';
import jump from 'jump.js';

// Menu Slider Variables
const btn = document.querySelector('.menu-btn');
const body = document.querySelector('.outer-wrap');
const menu = document.querySelector('.section--menu');

// Menu Button Variables
const top = document.querySelector('.ham--top');
const mid = document.querySelector('.ham--mid');
const bottom = document.querySelector('.ham--bottom');
const hamWrap = document.querySelector('.ham--wrap');
let menuOpen = false;

// Toggles menu
function menuToggle() {
  if (menu.classList.contains('section--menu--open')) {
    body.classList.remove('outer-wrap--open');
    menu.classList.remove('section--menu--open');
    top.classList.remove('ham--top--open');
    mid.classList.remove('ham--mid--open');
    bottom.classList.remove('ham--bottom--open');
    hamWrap.classList.remove('ham--wrap--open');
    menuOpen = !menuOpen;
  } else {
    body.classList.add('outer-wrap--open');
    menu.classList.add('section--menu--open');
    top.classList.add('ham--top--open');
    mid.classList.add('ham--mid--open');
    bottom.classList.add('ham--bottom--open');
    hamWrap.classList.add('ham--wrap--open');
    menuOpen = !menuOpen;
  }
}

// Button Menu Toggle
btn.addEventListener('click', () => {
  menuToggle();
});

// Outer menu click Menu Toggle
document.querySelector('.wrapper').addEventListener('click', () => {
  if (menuOpen == true) {
    menuToggle();
  }
});


// Hero Scroll
function scroll() {
  if (scrollY < 100000) {
    jump('.target', {
      offset: -59,
      callback: ()  => {
        const hero = document.querySelector('.section--hero');
        hero.style.display = 'none';
      }
    });
  }
}

window.setTimeout(scroll, 10000);

// hero on 'scroll' jump.js callback delete hero?
