export default function initMap() {
  // const ymaps = window.ymap;
  // if (ymaps) {
    ymaps.ready(function () {
      const myMap = new ymaps.Map('map',
          {center: [59.938635, 30.323118], zoom: 17},
          {searchControlProvider: 'yandex#search'}
      );

      const myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {hintContent: 'Собственный значок метки', balloonContent: 'Это красивая метка'},
          {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/svg/icon-pin.svg',
            // Размеры метки.
            iconImageSize: [18, 22],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
          }
      );

      myMap.geoObjects.add(myPlacemark);
    });
  // }
}
