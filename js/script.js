var feedbackForm = document.querySelector('.feedback');
var feedbackBtn = document.querySelector('.feedback-btn');
var feedbackClose = document.querySelector('.close-feedback');
var login = feedbackForm.querySelector('.name-feedback');
var email= feedbackForm.querySelector('.mail-feedback');
var submitBtn= feedbackForm.querySelector('.submitBtn');


feedbackBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add('feedback-show');
  login.focus();
});

feedbackClose.addEventListener('click', function () {
  feedbackForm.classList.remove('feedback-show');
});

submitBtn.addEventListener('click', function () {
  if (feedbackForm.classList.contains('feedback-bounce')) {
      feedbackForm.classList.remove('feedback-bounce');  
        }
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    feedbackForm.classList.add('feedback-bounce');
  }
 });  

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93863106417265,30.3230545],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -195]
        });

    myMap.geoObjects
        .add(myPlacemark);
});
