(function() {
  'use strict';

  $('.burger').on('click', function () {
    $('.menue').addClass('is-visible');
  });
  $('.close-menue').on('click', function () {
    $('.menue').removeClass('is-visible');
  })
})();