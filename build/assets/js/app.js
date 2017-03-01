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
      this.move(sectText, wScroll, 10);
    }
  }
}());


window.onscroll = function () {
  var wScroll = window.pageYOffset;

  if(doc.querySelector('.first-sect')){
    parallaxScroll.init(wScroll);
  }

};


var parallaxMouse = (function () {
  var layer = doc.querySelector('.parallax-mouse__layer');
  return {
    set: function () {
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
  }
}());

if(doc.querySelector('.parallax-mouse')){
  parallaxMouse.set();
}


var blur =(function () {
  var wrapper = doc.querySelector('.reviews__form-container'),
    form = doc.querySelector('.reviews__form-bg');

  return{
    set: function () {
      var imgWidth = doc.querySelector('.reviews__bg').offsetWidth,
        posLeft = -wrapper.offsetLeft,
        posTop = -wrapper.offsetTop,
        blurCss = form.style;

      blurCss.backgroundSize = imgWidth +'px' + ' ' + 'auto';
      blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px'
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





//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gICQoJy50b29nbGUtbWVudScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5sb2dpbi1idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcC1jb250YWluZXInKS5hZGRDbGFzcygnaXMtZmxpcHBlZCcpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtaGlkZGVuJylcclxuICB9KTtcclxuICAkKCcuZ28taW5kZXgnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcC1jb250YWluZXInKS5yZW1vdmVDbGFzcygnaXMtZmxpcHBlZCcpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLnRvb2dsZS1hbmNob3JzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuYmxvZ19fbmF2JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbnZhciBkb2MgPSBkb2N1bWVudDtcclxuXHJcblxyXG52YXIgcGFyYWxsYXhTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBiZyA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuZmlyc3Qtc2VjdF9fYmcnKSxcclxuICAgIHVzZXIgPSBkb2MucXVlcnlTZWxlY3RvcignLmZpcnN0LXNlY3RfX3VzZXInKSxcclxuICAgIHNlY3RUZXh0ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5maXJzdC1zZWN0X190ZXh0LWxheWVyJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1vdmU6IGZ1bmN0aW9uIChibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcclxuICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1zdHJhZmVBbW91bnQgKyAnJSc7XHJcbiAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoMCwnICsgc3RyYWZlICsgJywgMCknO1xyXG5cclxuICAgICAgdmFyIHN0eWxlID0gYmxvY2suc3R5bGU7XHJcblxyXG4gICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xyXG4gICAgICB0aGlzLm1vdmUoYmcsIHdTY3JvbGwsIDQwKTtcclxuICAgICAgdGhpcy5tb3ZlKHVzZXIsIHdTY3JvbGwsIDMpO1xyXG4gICAgICB0aGlzLm1vdmUoc2VjdFRleHQsIHdTY3JvbGwsIDEwKTtcclxuICAgIH1cclxuICB9XHJcbn0oKSk7XHJcblxyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICBpZihkb2MucXVlcnlTZWxlY3RvcignLmZpcnN0LXNlY3QnKSl7XHJcbiAgICBwYXJhbGxheFNjcm9sbC5pbml0KHdTY3JvbGwpO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5cclxudmFyIHBhcmFsbGF4TW91c2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBsYXllciA9IGRvYy5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtbW91c2VfX2xheWVyJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgcGFnZVggPSBlLnBhZ2VYLFxyXG4gICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxyXG4gICAgICAgICAgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBwYWdlWSxcclxuICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogMC4wNSxcclxuICAgICAgICAgIHBvc2l0aW9uWSA9IGluaXRpYWxZICogMC4wNSxcclxuICAgICAgICAgIGxheWVyU3R5bGUgPSBsYXllci5zdHlsZSxcclxuICAgICAgICAgIHRyYW5zZm9ybVBhcmFtID0gJ3RyYW5zbGF0ZTNkKCcrIHBvc2l0aW9uWCArJ3B4LCAnKyBwb3NpdGlvblkgKydweCwgMCknO1xyXG5cclxuICAgICAgICBsYXllclN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVBhcmFtO1xyXG4gICAgICAgIGxheWVyU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtUGFyYW07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcbmlmKGRvYy5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtbW91c2UnKSl7XHJcbiAgcGFyYWxsYXhNb3VzZS5zZXQoKTtcclxufVxyXG5cclxuXHJcbnZhciBibHVyID0oZnVuY3Rpb24gKCkge1xyXG4gIHZhciB3cmFwcGVyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzX19mb3JtLWNvbnRhaW5lcicpLFxyXG4gICAgZm9ybSA9IGRvYy5xdWVyeVNlbGVjdG9yKCcucmV2aWV3c19fZm9ybS1iZycpO1xyXG5cclxuICByZXR1cm57XHJcbiAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGltZ1dpZHRoID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzX19iZycpLm9mZnNldFdpZHRoLFxyXG4gICAgICAgIHBvc0xlZnQgPSAtd3JhcHBlci5vZmZzZXRMZWZ0LFxyXG4gICAgICAgIHBvc1RvcCA9IC13cmFwcGVyLm9mZnNldFRvcCxcclxuICAgICAgICBibHVyQ3NzID0gZm9ybS5zdHlsZTtcclxuXHJcbiAgICAgIGJsdXJDc3MuYmFja2dyb3VuZFNpemUgPSBpbWdXaWR0aCArJ3B4JyArICcgJyArICdhdXRvJztcclxuICAgICAgYmx1ckNzcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwb3NMZWZ0ICsgJ3B4JyArICcgJyArIHBvc1RvcCArICdweCdcclxuICAgIH1cclxuICB9XHJcbn0oKSk7XHJcblxyXG5pZihkb2MucXVlcnlTZWxlY3RvcignLnJldmlld3MnKSl7XHJcbiAgYmx1ci5zZXQoKTtcclxufVxyXG5cclxuXHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYoZG9jLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzJykpe1xyXG4gICAgYmx1ci5zZXQoKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iXX0=
