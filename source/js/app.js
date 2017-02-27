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

var doc = document;


var parallax = (function () {
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
      this.move(sectText, wScroll, 10);
    }
  }
}());


window.onscroll = function () {
  var wScroll = window.pageYOffset;

  parallax.init(wScroll);

};

var parallaxContainer = doc.querySelector('.parallax-mouse'),
  layer = doc.querySelector('.parallax-mouse__layer');
if(doc.querySelector('.parallax-mouse')){
  window.addEventListener('mousemove', function (e) {
    var pageX = e.pageX,
      pageY = e.pageY,
      initialX = (window.innerWidth / 2) - pageX,
      initialY = (window.innerHeight / 2) - pageY,
      positionX = initialX * 0.05,
      positionY = initialY * 0.05,
      layerStyle = layer.style,
      transformParam = 'translate3d('+ positionX +'px, '+ positionY +'px, 0)';

    layerStyle.webkitTransform = transformParam;
    layerStyle.transform = transformParam;
  });
}

var blur =(function () {
  var wrapper = doc.querySelector('.blur__form-wrapper'),
    form = doc.querySelector('.blur__form');

  return{
    set: function () {
      var imgWidth = doc.querySelector('.blur__bg').offsetWidth,
        posLeft = -wrapper.offsetLeft,
        posTop = -wrapper.offsetTop,
        blurCss = form.style;

      blurCss.backgroundSize = imgWidth +'px' + ' ' + 'auto';
      blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px'
    }
  }
}());
blur.set();


window.onresize = function () {
  blur.set();
};




