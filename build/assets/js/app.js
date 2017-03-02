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





//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gICQoJy50b29nbGUtbWVudScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5sb2dpbi1idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcC1jb250YWluZXInKS5hZGRDbGFzcygnaXMtZmxpcHBlZCcpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtaGlkZGVuJylcclxuICB9KTtcclxuICAkKCcuZ28taW5kZXgnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcC1jb250YWluZXInKS5yZW1vdmVDbGFzcygnaXMtZmxpcHBlZCcpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLnRvb2dsZS1hbmNob3JzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuYmxvZ19fbmF2JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICB9KTtcclxuXHJcbn0pKCk7XHJcblxyXG52YXIgZm9vdGVySGVpZ2h0ID0oZnVuY3Rpb24gKCkge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBmb290ZXIgPSAkKCcuZm9vdGVyJyksXHJcbiAgICAgICAgICBmb290ZXJIZWlnaHQ9IGZvb3Rlci5oZWlnaHQoKSxcclxuICAgICAgICAgIGxhc3RTZWN0ID0gZm9vdGVyLnByZXYoKS5maW5kKCcuc2VjdCcpLmxhc3QoKTtcclxuICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPiA0ODApe1xyXG4gICAgICAgIGxhc3RTZWN0LmNzcygncGFkZGluZy1ib3R0b20nLCBmb290ZXJIZWlnaHQpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBsYXN0U2VjdC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufSgpKTtcclxuZm9vdGVySGVpZ2h0LnNldCgpO1xyXG5cclxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gIGZvb3RlckhlaWdodC5zZXQoKTtcclxufSk7XHJcblxyXG52YXIgZG9jID0gZG9jdW1lbnQ7XHJcblxyXG5cclxudmFyIHBhcmFsbGF4U2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYmcgPSBkb2MucXVlcnlTZWxlY3RvcignLmZpcnN0LXNlY3RfX2JnJyksXHJcbiAgICB1c2VyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5maXJzdC1zZWN0X191c2VyJyksXHJcbiAgICBzZWN0VGV4dCA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuZmlyc3Qtc2VjdF9fdGV4dC1sYXllcicpO1xyXG4gIHJldHVybiB7XHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XHJcbiAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnO1xyXG4gICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKDAsJyArIHN0cmFmZSArICcsIDApJztcclxuXHJcbiAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xyXG5cclxuICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcclxuICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCA0MCk7XHJcbiAgICAgIHRoaXMubW92ZSh1c2VyLCB3U2Nyb2xsLCAzKTtcclxuICAgICAgaWYoc2VjdFRleHQpe1xyXG4gICAgICAgIHRoaXMubW92ZShzZWN0VGV4dCwgd1Njcm9sbCwgMTApO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcblxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gIGlmKGRvYy5xdWVyeVNlbGVjdG9yKCcuZmlyc3Qtc2VjdCcpKXtcclxuICAgIHBhcmFsbGF4U2Nyb2xsLmluaXQod1Njcm9sbCk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbnZhciBibHVyID0oZnVuY3Rpb24gKCkge1xyXG4gIHZhciB3cmFwcGVyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzX19mb3JtLWNvbnRhaW5lcicpLFxyXG4gICAgd3JhcHBlckltZyA9IGRvYy5xdWVyeVNlbGVjdG9yKCcucmV2aWV3c19fYmctaW1nJyksXHJcbiAgICBmb3JtID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzX19mb3JtLWJnJyk7XHJcblxyXG4gIHJldHVybntcclxuICAgIHNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaW1nV2lkdGggPSBkb2MucXVlcnlTZWxlY3RvcignLnJldmlld3NfX2JnJykub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgcG9zTGVmdCA9IC13cmFwcGVyLm9mZnNldExlZnQsXHJcbiAgICAgICAgcG9zVG9wID0gLXdyYXBwZXIub2Zmc2V0VG9wICsgd3JhcHBlckltZy5vZmZzZXRUb3AsXHJcbiAgICAgICAgYmx1ckNzcyA9IGZvcm0uc3R5bGU7XHJcblxyXG4gICAgICBibHVyQ3NzLmJhY2tncm91bmRTaXplID0gaW1nV2lkdGggKydweCcgKyAnICcgKyAnYXV0byc7XHJcbiAgICAgIGJsdXJDc3MuYmFja2dyb3VuZFBvc2l0aW9uID0gcG9zTGVmdCArICdweCcgKyAnICcgKyBwb3NUb3AgKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcbmlmKGRvYy5xdWVyeVNlbGVjdG9yKCcucmV2aWV3cycpKXtcclxuICBibHVyLnNldCgpO1xyXG59XHJcblxyXG5cclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZihkb2MucXVlcnlTZWxlY3RvcignLnJldmlld3MnKSl7XHJcbiAgICBibHVyLnNldCgpO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iXX0=
