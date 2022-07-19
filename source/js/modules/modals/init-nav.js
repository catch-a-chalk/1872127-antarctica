const navMain = document.querySelector('.page-header__nav');
const navToggle = document.querySelector('.page-header__toggle');
const navLogo = document.querySelector('.page-header__logotype');

export default function initNav() {
  if (navMain && navToggle && navLogo) {
    navMain.classList.remove('page-header__nav--nojs');
    navLogo.classList.remove('page-header__logotype--inside');

    navToggle.addEventListener('click', () => {
      // стоит ли открывать
      const shouldBeOpened = navToggle.ariaExpanded === 'false';
      toggleNav(shouldBeOpened);
    });
  }
}

export function toggleNav(willBeOpened) {
  if (navMain) {
    navMain.classList.toggle('page-header__nav--closed', !willBeOpened);
    navMain.classList.toggle('page-header__nav--opened', willBeOpened);
  }

  if (navLogo) {
    navLogo.classList.toggle('page-header__logotype--inside', willBeOpened);
  }

  // не позволяет скроллить
  document.body.style.overflow = willBeOpened ? 'hidden' : '';
  if (navToggle) {
    navToggle.ariaExpanded = String(willBeOpened);
    navToggle.areaLabel = `${willBeOpened ? 'Открыть' : 'Закрыть'} меню`;
  }
}
