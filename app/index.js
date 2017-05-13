import 'whatwg-fetch';
import jump from 'jump.js';

// Is the menu open?
let menuOpen = false;

// Menu Button Variables
const menuBtn = document.querySelector('.menu-btn');

// Menu Variables
const body = document.querySelector('body');
const menu = document.querySelector('.section--menu');

// Hamburger Variables
const mid = document.querySelector('.line--mid');
const topLine = document.querySelector('.line--top');
const bottom = document.querySelector('.line--bottom');


function toggleMenu() {
  if (!menuOpen) {
    menu.classList.add('section--menu--open');
    body.classList.add('body--open');
    mid.classList.add('line--mid--open');
    topLine.classList.add('line--top--open');
    bottom.classList.add('line--bottom--open');
    menuOpen = !menuOpen;
  } else {
    menu.classList.remove('section--menu--open');
    body.classList.remove('body--open');
    mid.classList.remove('line--mid--open');
    topLine.classList.remove('line--top--open');
    bottom.classList.remove('line--bottom--open');
    menuOpen = !menuOpen;
  }
}

// Menu Btn - Menu Toggle
menuBtn.addEventListener('click', () => {
  toggleMenu();
});
