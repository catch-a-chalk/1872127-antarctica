const navMain = document.querySelector('.page-header__nav');
const navToggle = document.querySelector('.page-header__toggle');
const navLogo = document.querySelector('.page-header__logotype');

export default function initNav() {
  navMain.classList.remove('page-header__nav--nojs');
  navLogo.classList.remove('page-header__logotype--inside');

  navToggle.addEventListener('click', () => {
    // стоит ли открывать
    const shouldBeOpened = navToggle.ariaExpanded === 'false';
    toggleNav(shouldBeOpened);
  });
}

export function toggleNav(willBeOpened) {
  if (navMain.classList.toggle('page-header__nav--closed', !willBeOpened)) {
    // удаляет класс логотипу и ставит на место
    navLogo.classList.remove('page-header__logotype--inside');
  }

  if (navMain.classList.toggle('page-header__nav--opened', willBeOpened)) {
    // добавляет класс логотипу и ставит его внутрь меню
    navLogo.classList.add('page-header__logotype--inside');
  }

  // не позволяет скроллить
  document.body.style.overflow = willBeOpened ? 'hidden' : '';
  navToggle.ariaExpanded = String(willBeOpened);
  navToggle.areaLabel = `${willBeOpened ? 'Открыть' : 'Закрыть'} меню`;
}
