var validation = (function () {

  var init = function () {

  };

  var _errorMes = function (element) {

  };

  var validateForm = function (form) {
    var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
        valid = true;

    $.each(elements, function (index, val) {
      console.log(index);
      console.log(val);
    })
  };

  return {
    init: init,
    validateForm: validateForm
  }
}());

validation.init();