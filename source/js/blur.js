'use strict';
module.exports = function(){
  var blur =(function () {
    var wrapper = doc.querySelector('.reviews__form-container'),
      wrapperImg = doc.querySelector('.reviews__bg-img'),
      form = doc.querySelector('.reviews__form-bg');

    return{
      set: function () {
        var imgWidth = doc.querySelector('.reviews__bg').offsetWidth,
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop + wrapperImg.offsetTop,
          blurCss = form.style;

        blurCss.backgroundSize = imgWidth +'px' + ' ' + 'auto';
        blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
      }
    }
  }());
};
