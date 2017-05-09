import 'whatwg-fetch';

const arrow = document.querySelector('.hero__arrow');
const element = document.querySelector('.section--work');

arrow.addEventListener('click', () => {
  console.log('YES');
  // element.scrollIntoView();
  // element.scrollIntoView(false);
  // element.scrollIntoView({ block: 'end' });
  // element.scrollIntoView({ block: 'end', behavior: 'smooth' });
  window.scrollTo(0, 300);
});
