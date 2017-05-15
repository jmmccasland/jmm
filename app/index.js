import 'whatwg-fetch';
// import jump from 'jump.js';
//
// // Is the menu open?
// let menuOpen = false;
//
// // Menu Button Variables
// const menuBtn = document.querySelector('.menu-btn');
//
// // Menu Variables
// const body = document.querySelector('.body');
// const menu = document.querySelector('.section--menu');
// const wrapper = document.querySelector('.wrapper');
// const topNav = document.querySelector('.section--top-nav');
//
//
// // Hamburger Variables
// const mid = document.querySelector('.line--mid');
// const topLine = document.querySelector('.line--top');
// const bottom = document.querySelector('.line--bottom');
//
// // Menu Toggle Function
// function toggleMenu() {
//   if (!menuOpen) {
//     body.classList.add('body--open');
//     menu.classList.add('section--menu--open');
//     wrapper.classList.add('wrapper--open');
//     topNav.classList.add('section--top-nav--open');
//     mid.classList.add('line--mid--open');
//     topLine.classList.add('line--top--open');
//     bottom.classList.add('line--bottom--open');
//     menuOpen = !menuOpen;
//   } else {
//     body.classList.remove('body--open');
//     menu.classList.remove('section--menu--open');
//     wrapper.classList.remove('wrapper--open');
//     topNav.classList.remove('section--top-nav--open');
//     mid.classList.remove('line--mid--open');
//     topLine.classList.remove('line--top--open');
//     bottom.classList.remove('line--bottom--open');
//     menuOpen = !menuOpen;
//   }
// }
//
// // Call the Toggle Function on the Menu Btn Click
// menuBtn.addEventListener('click', () => {
//   toggleMenu();
// });
//
//
// // Page Transitions \\
// // 'PAGE' Variables
// const home = document.querySelector('.section--hero');
// const work = document.querySelector('.section--work');
// const about = document.querySelector('.section--about');
// const contact = document.querySelector('.section--contact');
//
// // Link Variables
// const homeBtn = document.querySelector('.home-btn');
// const workBtn = document.querySelector('.work-btn');
// const aboutBtn = document.querySelector('.about-btn');
// const contactBtn = document.querySelector('.contact-btn');
//
// homeBtn.addEventListener('click', () => {
//   jump(home, {
//     offset: -59,
//     callback: () => toggleMenu(),
//   });
// });
//
// workBtn.addEventListener('click', () => {
//   jump(work, {
//     offset: -59,
//     callback: () => toggleMenu(),
//   });
// });
//
// aboutBtn.addEventListener('click', () => {
//   jump(about, {
//     offset: -59,
//     callback: () => toggleMenu(),
//   });
// });
