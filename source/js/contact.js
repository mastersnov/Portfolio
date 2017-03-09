'use strict';

var validation = require("./validation")();

module.exports = function(){
    var init = function () {
      _setUpListeners();
    };

    var _setUpListeners = function (element) {
      $('.form-contact').on('submit', _submitForm);
    };

    var _submitForm = function (e) {
      console.log('form submit');
      e.preventDefault();

      var form = $(this),
        url = 'contact.php',
        defObj = _ajaxForm(form, url);
    };

    var _ajaxForm = function (form, url) {
      console.log('ajax with walidation');
      if(!validation.validateForm(form)) return false
    };

    return {
      init: init,
    }

};