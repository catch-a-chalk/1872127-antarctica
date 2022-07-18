import {toggleNav} from './init-nav';

export default function initScroll() {
  const navLink = document.querySelectorAll('.page-header__link');

  navLink.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNav(false);
      const elementId = e.currentTarget.attributes.href.nodeValue;
      document.querySelector(elementId).scrollIntoView({behavior: 'smooth'});
    });
  });
}
