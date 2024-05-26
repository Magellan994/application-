document.addEventListener('DOMContentLoaded', function() {
    new Splide('#splide', {
      type: 'carousel', // Используйте 'carousel' для типа карусели или 'fade' для типа fade.
      // Другие настройки Splide
      perPage: 1, // Количество слайдов, отображаемых на одной странице.
      gap: 10, // Расстояние между слайдами (px).
      autoplay: true, // Автопрокрутка слайдов.
      interval: 3000, // Интервал автопрокрутки в миллисекундах.
      pauseOnHover: true, // Приостанавливать автопрокрутку при наведении курсора.
    }).mount()
  });