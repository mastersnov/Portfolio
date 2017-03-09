'use strict';

module.exports = function(){
    return {
      init: function () {
        var footer = document.querySelector('.footer'),
          footerHeight= $(footer).height(),
          lastSect = $(footer).prev().find('.sect').last();
        if($(window).outerWidth() > 480){
          lastSect.css('padding-bottom', footerHeight);
        }else{
          lastSect.removeAttr('style');
        }
      }
    };
};
