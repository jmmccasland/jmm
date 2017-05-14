import 'whatwg-fetch';
import jump from 'jump.js';

// Is the menu open?
let menuOpen = false;

// Menu Button Variables
const menuBtn = document.querySelector('.menu-btn');

// Menu Variables
const body = document.querySelector('.body');
const menu = document.querySelector('.section--menu');
const wrapper = document.querySelector('.wrapper');
const topNav = document.querySelector('.section--top-nav');


// Hamburger Variables
const mid = document.querySelector('.line--mid');
const topLine = document.querySelector('.line--top');
const bottom = document.querySelector('.line--bottom');

// Menu Toggle Function
function toggleMenu() {
  if (!menuOpen) {
    body.classList.add('body--open');
    menu.classList.add('section--menu--open');
    wrapper.classList.add('wrapper--open');
    topNav.classList.add('section--top-nav--open');
    mid.classList.add('line--mid--open');
    topLine.classList.add('line--top--open');
    bottom.classList.add('line--bottom--open');
    menuOpen = !menuOpen;
  } else {
    body.classList.remove('body--open');
    menu.classList.remove('section--menu--open');
    wrapper.classList.remove('wrapper--open');
    topNav.classList.remove('section--top-nav--open');
    mid.classList.remove('line--mid--open');
    topLine.classList.remove('line--top--open');
    bottom.classList.remove('line--bottom--open');
    menuOpen = !menuOpen;
  }
}

// Call the Toggle Function on the Menu Btn Click
menuBtn.addEventListener('click', () => {
  toggleMenu();
});


// Page Transitions \\
// 'PAGE' Variables
const home = document.querySelector('.section--hero');
const work = document.querySelector('.section--work');
const about = document.querySelector('.section--about');
const contact = document.querySelector('.section--contact');

// Link Variables
const homeBtn = document.querySelector('.home-btn');
const workBtn = document.querySelector('.work-btn');
const aboutBtn = document.querySelector('.about-btn');
const contactBtn = document.querySelector('.contact-btn');


// Remove Page Function
function lock(page) {
  if (page == home) {
    work.style.display = 'none';
    about.style.display = 'none';
    // contact.style.display = 'none';
  }

  if (page == work) {
    home.style.display = 'none';
    about.style.display = 'none';
    // contact.style.display = 'none';
  }

  if (page == about) {
    home.style.display = 'none';
    work.style.display = 'none';
    // contact.style.display = 'none';
  }
}

// Re Add page function
function unlock() {
  about.style.display = 'flex';
  work.style.display = 'flex';
  home.style.display = 'flex';
}

homeBtn.addEventListener('click', () => {
  // debugger;
  unlock();
  jump('.section--hero', {
    offset: -59,
    // duration: 2000,
    callback: () => lock(home),
  });
  toggleMenu();
});

workBtn.addEventListener('click', () => {
  unlock();
  jump('.section--work', {
    offset: -59,
    // duration: 2000,
    callback: () => lock(work),
  });
  toggleMenu();
});

aboutBtn.addEventListener('click', () => {
  unlock();
  jump('.section--about', {
    offset: -59,
    // duration: 2000,
    callback: () => lock(about),
  });
  toggleMenu();
});
