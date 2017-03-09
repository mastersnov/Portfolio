'use strict';
module.exports = function(){

    var init = function () {
      _setUpListeners();
    };

    var _setUpListeners = function (element) {
      $('form').on('keydown', '.is-error', _removeError);
      $('form').on('reset', _clearForm);
    };

    var _removeError = function () {
      $(this).removeClass('is-error');
    };

    var _clearForm = function (form) {
      var form = $(this);
      form.find('.is-error').removeClass('is-error');
    };

    var validateForm = function (form) {

      console.log('validation module');

      var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
        valid = true;

      $.each(elements, function (index, val) {
        var elem = $(val),
          val = elem.val();


        if (val.length === 0){

          $(this).parent('.field').addClass('is-error');
          valid = false;
        }
      });

      return valid;
    };

    return {
      init: init,
      validateForm: validateForm
    }

};