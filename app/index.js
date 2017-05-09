import 'whatwg-fetch';
import jump from 'jump.js';


const element = document.querySelector('.hero__arrow');

element.addEventListener('click', () => {
  jump('#work');
});
