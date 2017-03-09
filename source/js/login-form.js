'use strict';

var validation = require("./validation")();

module.exports = function(){
    var init = function () {
      _setUpListeners();
    };

    var _setUpListeners = function () {
      $('.form-login').on('submit', _login );
    };

    var _login = function (e) {
      e.preventDefault();

      var form = $(this),
        url = 'login.php',
        defObj = _ajaxForm(form, url);

      if(defObj){
        defObj.done(function (ans) {
          console.log('success');
          console.log(ans);
        })
      }
    };

    var _ajaxForm = function (form, url) {

      if(!validation.validateForm(form)) return false;

      var data = form.serialize();

      var result = $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: data
      }).fail(function () {
        console.log('error on server');
      });

      return result;

    };

    return{
      init: init
    }
};