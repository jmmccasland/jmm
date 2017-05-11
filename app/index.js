import 'whatwg-fetch';
import jump from 'jump.js';


const element = document.querySelector('.hero__arrow');

element.addEventListener('click', () => {
  jump('.target', {
    offset: -59,
    callback: () => console.log('Hey! Thanks for caring enough to check this out! I used jump.js for that fancy scroll you just saw. Thanks, Michael! You can check his work out here: https://github.com/callmecavs/jump.js')

  });
});
