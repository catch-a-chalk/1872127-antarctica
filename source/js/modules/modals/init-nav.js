export default function initNav() {
  const navMain = document.querySelector('.page-header__nav');
  const navToggle = document.querySelector('.page-header__toggle');

  navMain.classList.remove('page-header__nav--nojs');

  navToggle.addEventListener('click', () => {
    // стоит ли открывать
    const shouldBeOpened = navToggle.ariaExpanded === 'false';
    navMain.classList.toggle('page-header__nav--closed', !shouldBeOpened);
    navMain.classList.toggle('page-header__nav--opened', shouldBeOpened);
    // не позволяет скроллить
    document.body.style.overflow = shouldBeOpened ? 'hidden' : '';
    navToggle.ariaExpanded = String(shouldBeOpened);
    navToggle.areaLabel = `${shouldBeOpened ? 'Открыть' : 'Закрыть'} меню`;
  });
}