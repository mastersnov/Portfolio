

$(document).ready(function () {

  (function() {
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

  footerHeight.set();

  if(doc.querySelector('.reviews')){
    blur.set();
  }

  $(window).resize(function(){
    footerHeight.set();
    if(doc.querySelector('.reviews')){
      blur.set();
    }
  });

  window.onscroll = function () {
    var wScroll = window.pageYOffset;

    if(doc.querySelector('.first-sect')){
      parallaxScroll.init(wScroll);
    }

  };
});


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


$(document).ready(function () {
  if(doc.querySelector('.reviews')){
    blur.set();
  }

  window.onresize = function () {
    if(doc.querySelector('.reviews')){
      blur.set();
    }
  };
});








//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcudG9vZ2xlLW1lbnUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICQoJy5tZW51JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5sb2dpbi1idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCgnLmZsaXAtY29udGFpbmVyJykuYWRkQ2xhc3MoJ2lzLWZsaXBwZWQnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtaGlkZGVuJylcclxuICAgIH0pO1xyXG4gICAgJCgnLmdvLWluZGV4JykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdpcy1mbGlwcGVkJyk7XHJcbiAgICAgICQoJy5sb2dpbi1idG4nKS5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcudG9vZ2xlLWFuY2hvcnMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLmJsb2dfX25hdicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgZm9vdGVySGVpZ2h0LnNldCgpO1xyXG5cclxuICBpZihkb2MucXVlcnlTZWxlY3RvcignLnJldmlld3MnKSl7XHJcbiAgICBibHVyLnNldCgpO1xyXG4gIH1cclxuXHJcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgZm9vdGVySGVpZ2h0LnNldCgpO1xyXG4gICAgaWYoZG9jLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzJykpe1xyXG4gICAgICBibHVyLnNldCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICBpZihkb2MucXVlcnlTZWxlY3RvcignLmZpcnN0LXNlY3QnKSl7XHJcbiAgICAgIHBhcmFsbGF4U2Nyb2xsLmluaXQod1Njcm9sbCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbn0pO1xyXG5cclxuXHJcbnZhciBmb290ZXJIZWlnaHQgPShmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGZvb3RlciA9ICQoJy5mb290ZXInKSxcclxuICAgICAgICAgIGZvb3RlckhlaWdodD0gZm9vdGVyLmhlaWdodCgpLFxyXG4gICAgICAgICAgbGFzdFNlY3QgPSBmb290ZXIucHJldigpLmZpbmQoJy5zZWN0JykubGFzdCgpO1xyXG4gICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+IDQ4MCl7XHJcbiAgICAgICAgbGFzdFNlY3QuY3NzKCdwYWRkaW5nLWJvdHRvbScsIGZvb3RlckhlaWdodCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGxhc3RTZWN0LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59KCkpO1xyXG5cclxudmFyIGRvYyA9IGRvY3VtZW50O1xyXG5cclxuXHJcbnZhciBwYXJhbGxheFNjcm9sbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGJnID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5maXJzdC1zZWN0X19iZycpLFxyXG4gICAgdXNlciA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuZmlyc3Qtc2VjdF9fdXNlcicpLFxyXG4gICAgc2VjdFRleHQgPSBkb2MucXVlcnlTZWxlY3RvcignLmZpcnN0LXNlY3RfX3RleHQtbGF5ZXInKTtcclxuICByZXR1cm4ge1xyXG4gICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xyXG4gICAgICB2YXIgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArICclJztcclxuICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCcgKyBzdHJhZmUgKyAnLCAwKSc7XHJcblxyXG4gICAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuXHJcbiAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgNDApO1xyXG4gICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgMyk7XHJcbiAgICAgIGlmKHNlY3RUZXh0KXtcclxuICAgICAgICB0aGlzLm1vdmUoc2VjdFRleHQsIHdTY3JvbGwsIDEwKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn0oKSk7XHJcblxyXG5cclxudmFyIGJsdXIgPShmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHdyYXBwZXIgPSBkb2MucXVlcnlTZWxlY3RvcignLnJldmlld3NfX2Zvcm0tY29udGFpbmVyJyksXHJcbiAgICB3cmFwcGVySW1nID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzX19iZy1pbWcnKSxcclxuICAgIGZvcm0gPSBkb2MucXVlcnlTZWxlY3RvcignLnJldmlld3NfX2Zvcm0tYmcnKTtcclxuXHJcbiAgcmV0dXJue1xyXG4gICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBpbWdXaWR0aCA9IGRvYy5xdWVyeVNlbGVjdG9yKCcucmV2aWV3c19fYmcnKS5vZmZzZXRXaWR0aCxcclxuICAgICAgICBwb3NMZWZ0ID0gLXdyYXBwZXIub2Zmc2V0TGVmdCxcclxuICAgICAgICBwb3NUb3AgPSAtd3JhcHBlci5vZmZzZXRUb3AgKyB3cmFwcGVySW1nLm9mZnNldFRvcCxcclxuICAgICAgICBibHVyQ3NzID0gZm9ybS5zdHlsZTtcclxuXHJcbiAgICAgIGJsdXJDc3MuYmFja2dyb3VuZFNpemUgPSBpbWdXaWR0aCArJ3B4JyArICcgJyArICdhdXRvJztcclxuICAgICAgYmx1ckNzcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwb3NMZWZ0ICsgJ3B4JyArICcgJyArIHBvc1RvcCArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG59KCkpO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICBpZihkb2MucXVlcnlTZWxlY3RvcignLnJldmlld3MnKSl7XHJcbiAgICBibHVyLnNldCgpO1xyXG4gIH1cclxuXHJcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoZG9jLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzJykpe1xyXG4gICAgICBibHVyLnNldCgpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
