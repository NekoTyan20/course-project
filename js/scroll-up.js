// выбираем ссылку кнопки наверх
var scrollToTopLink = document.querySelector('.scroll-to-top');

// добавляем обработчик события на прокрутку страницы
window.addEventListener('scroll', function() {
  // если текущая позиция скролла больше 300 пикселей
  if (window.pageYOffset > 300) {
    // показываем ссылку кнопки наверх
    scrollToTopLink.style.display = 'inline-block';
  } else {
    // скрываем ссылку кнопки наверх
    scrollToTopLink.style.display = 'none';
  }
});

// добавляем обработчик события на клик по ссылке
scrollToTopLink.addEventListener('click', function(event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // плавно прокручиваем страницу наверх
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
