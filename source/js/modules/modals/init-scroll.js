// import smoothscroll from 'smoothscroll-polyfill';
// smoothscroll.polyfill();
export default function initScroll() {
  const navLink = document.querySelectorAll('.page-header__link');

  navLink.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const elementId = e.currentTarget.attributes.href.nodeValue;
      document.querySelector(elementId).scrollIntoView({ behavior: 'smooth' });
    });
  });
}
