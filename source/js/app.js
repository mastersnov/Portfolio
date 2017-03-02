(function() {
  'use strict';
  $('.toogle-menu').click(function() {
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('is-open');
  });

  $('.login-btn').click(function(e) {
    e.preventDefault();
    $('.flip-container').addClass('is-flipped');
    $(this).addClass('is-hidden')
  });
  $('.go-index').click(function(e) {
    e.preventDefault();
    $('.flip-container').removeClass('is-flipped');
    $('.login-btn').removeClass('is-hidden');
  });

  $('.toogle-anchors').click(function() {
    $('.blog__nav').toggleClass('is-open');
  });

})();

var footerHeight =(function () {

  return {
    set: function () {
      var footer = $('.footer'),
          footerHeight= footer.height(),
          lastSect = footer.prev().find('.sect').last();
      if($(window).width() > 480){
        lastSect.css('padding-bottom', footerHeight);
      }else{
        lastSect.removeAttr('style');
      }
    }
  };
}());
footerHeight.set();

$(window).resize(function(){
  footerHeight.set();
});

var doc = document;


var parallaxScroll = (function () {
  var bg = doc.querySelector('.first-sect__bg'),
    user = doc.querySelector('.first-sect__user'),
    sectText = doc.querySelector('.first-sect__text-layer');
  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0,' + strafe + ', 0)';

      var style = block.style;

      style.webkitTransform = transformString;
      style.transform = transformString;
    },
    init: function (wScroll) {
      this.move(bg, wScroll, 40);
      this.move(user, wScroll, 3);
      if(sectText){
        this.move(sectText, wScroll, 10);
      }

    }
  }
}());


window.onscroll = function () {
  var wScroll = window.pageYOffset;

  if(doc.querySelector('.first-sect')){
    parallaxScroll.init(wScroll);
  }

};

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

if(doc.querySelector('.reviews')){
  blur.set();
}



window.onresize = function () {
  if(doc.querySelector('.reviews')){
    blur.set();
  }

};




