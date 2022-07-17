export default function initNav() {
  const navMain = document.querySelector('.page-nav');
  const navToggle = document.querySelector('.page-nav__toggle');

  navMain.classList.remove('page-nav--nojs');

  navToggle.addEventListener('click', () => {
    // стоит ли открывать
    const shouldBeOpened = navToggle.ariaExpanded === 'false';
    navMain.classList.toggle('page-nav--closed', !shouldBeOpened);
    navMain.classList.toggle('page-nav--opened', shouldBeOpened);
    // не позволяет скроллить
    document.body.style.overflow = shouldBeOpened ? 'hidden' : '';
    navToggle.ariaExpanded = String(shouldBeOpened);
    navToggle.areaLabel = `${shouldBeOpened ? 'Открыть' : 'Закрыть'} меню`;
  });
}