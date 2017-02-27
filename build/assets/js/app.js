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





//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgJCgnLnRvb2dsZS1tZW51JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICQoJy5tZW51JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmxvZ2luLWJ0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLmFkZENsYXNzKCdpcy1mbGlwcGVkJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1oaWRkZW4nKVxyXG4gIH0pO1xyXG4gICQoJy5nby1pbmRleCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdpcy1mbGlwcGVkJyk7XHJcbiAgICAkKCcubG9naW4tYnRuJykucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcudG9vZ2xlLWFuY2hvcnMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5ibG9nX19uYXYnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxudmFyIGRvYyA9IGRvY3VtZW50O1xyXG5cclxuXHJcbnZhciBwYXJhbGxheCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGJnID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5maXJzdC1zZWN0X19iZycpLFxyXG4gICAgdXNlciA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuZmlyc3Qtc2VjdF9fdXNlcicpLFxyXG4gICAgc2VjdFRleHQgPSBkb2MucXVlcnlTZWxlY3RvcignLmZpcnN0LXNlY3RfX3RleHQtbGF5ZXInKTtcclxuICByZXR1cm4ge1xyXG4gICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xyXG4gICAgICB2YXIgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArICclJztcclxuICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCcgKyBzdHJhZmUgKyAnLCAwKSc7XHJcblxyXG4gICAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuXHJcbiAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgNDApO1xyXG4gICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgMyk7XHJcbiAgICAgIHRoaXMubW92ZShzZWN0VGV4dCwgd1Njcm9sbCwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcblxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gIHBhcmFsbGF4LmluaXQod1Njcm9sbCk7XHJcblxyXG59O1xyXG5cclxudmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1tb3VzZScpLFxyXG4gIGxheWVyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1tb3VzZV9fbGF5ZXInKTtcclxuaWYoZG9jLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1tb3VzZScpKXtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXHJcbiAgICAgIHBhZ2VZID0gZS5wYWdlWSxcclxuICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxyXG4gICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZLFxyXG4gICAgICBwb3NpdGlvblggPSBpbml0aWFsWCAqIDAuMDUsXHJcbiAgICAgIHBvc2l0aW9uWSA9IGluaXRpYWxZICogMC4wNSxcclxuICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxyXG4gICAgICB0cmFuc2Zvcm1QYXJhbSA9ICd0cmFuc2xhdGUzZCgnKyBwb3NpdGlvblggKydweCwgJysgcG9zaXRpb25ZICsncHgsIDApJztcclxuXHJcbiAgICBsYXllclN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVBhcmFtO1xyXG4gICAgbGF5ZXJTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1QYXJhbTtcclxuICB9KTtcclxufVxyXG5cclxudmFyIGJsdXIgPShmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHdyYXBwZXIgPSBkb2MucXVlcnlTZWxlY3RvcignLmJsdXJfX2Zvcm0td3JhcHBlcicpLFxyXG4gICAgZm9ybSA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuYmx1cl9fZm9ybScpO1xyXG5cclxuICByZXR1cm57XHJcbiAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGltZ1dpZHRoID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5ibHVyX19iZycpLm9mZnNldFdpZHRoLFxyXG4gICAgICAgIHBvc0xlZnQgPSAtd3JhcHBlci5vZmZzZXRMZWZ0LFxyXG4gICAgICAgIHBvc1RvcCA9IC13cmFwcGVyLm9mZnNldFRvcCxcclxuICAgICAgICBibHVyQ3NzID0gZm9ybS5zdHlsZTtcclxuXHJcbiAgICAgIGJsdXJDc3MuYmFja2dyb3VuZFNpemUgPSBpbWdXaWR0aCArJ3B4JyArICcgJyArICdhdXRvJztcclxuICAgICAgYmx1ckNzcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwb3NMZWZ0ICsgJ3B4JyArICcgJyArIHBvc1RvcCArICdweCdcclxuICAgIH1cclxuICB9XHJcbn0oKSk7XHJcbmJsdXIuc2V0KCk7XHJcblxyXG5cclxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIGJsdXIuc2V0KCk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iXX0=
