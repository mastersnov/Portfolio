'use strict';
module.exports = function(){
    var wrapper = document.querySelector('.reviews__form-container'),
      wrapperImg = document.querySelector('.reviews__bg-img'),
      form = document.querySelector('.reviews__form-bg');

    return{
      set: function () {
        var imgWidth = document.querySelector('.reviews__bg').offsetWidth,
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop + wrapperImg.offsetTop,
          blurCss = form.style;

        blurCss.backgroundSize = imgWidth +'px' + ' ' + 'auto';
        blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
      }
    }
};
