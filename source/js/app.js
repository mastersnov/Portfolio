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
    sectText = doc.querySelector('.first-sect__text-element');
  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0,' + strafe + ', 0)';

      var style = block.style;

      style.webkitTransform = transformString;
      style.transform = transformString;
    },
    init: function (wScroll) {
      this.move(bg, wScroll, 50);
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


var preloader = (function(){
  var percentsTotal = 0;
  var preloader = $('.preloader');

  var imgPath = $('*').map(function (ndx, element) {
    var background = $(element).css('background-image');
    var isImg = $(element).is('img');
    var path = '';

    if (background != 'none') {
      path = background.replace('url("', '').replace('")', '');
    }

    if (isImg) {
      path = $(element).attr('src');
    }

    if (path) return path;
  });

  var setPercents = function(total, current) {
    var percents = Math.ceil(current / total * 100);

    $('.preloader__percents').text(percents + '%');

    if (percents >= 100) {
      preloader.fadeOut();
    }
  };

  var loadImages = function(images) {

    if (!images.length) preloader.fadeOut();

    images.forEach(function(img, i, images){
      var fakeImage = $('<img>', {
        attr : {
          src : img
        }
      });

      fakeImage.on('load error', function(){
        percentsTotal++;
        setPercents(images.length, percentsTotal);
      });
    });

  };

  return {
    init: function () {
      var imgs = imgPath.toArray();

      loadImages(imgs);
    }
  }
}());

$(function () {
  preloader.init();
});




var scrollMenu = (function () {
  var $news = $('.article'),
    $item = $('.anchors__item'),
    $menu = $('.anchors'),
    $wrapMenu = $('.blog__nav'),
    body = document.body,
    isPositionArticle = [],
    offsetHeight = 200,

    positionArticle = function (element) {
      var len = element.length;
      for (let i = 0; i < len; i++) {
        isPositionArticle[i] = {};
        isPositionArticle[i].top = element
          .eq(i)
          .offset()
            .top - offsetHeight;
        isPositionArticle[i].bottom = isPositionArticle[i].top + element
          .eq(i)
          .innerHeight();
      }
    },

    scrollPageFixMenu = function (e) {
      var scroll = window.pageYOffset,
          width = $wrapMenu.width();
      if (scroll < $news.offset().top) {
        $menu.removeClass('is-fixed');
        $menu.removeAttr('style');
      } else {
        $menu.addClass('is-fixed');
        $menu.css("width", width);
      }
    },

    scrollPage = function (e) {
      var scroll = window.pageYOffset;
      for (let i = 0; i < isPositionArticle.length; i++) {
        if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
          $item
          .eq(i)
          .addClass('anchors__item_active')
          .siblings()
          .removeClass('anchors__item_active');
          console.log(i);
        }
      }
    },

    clickOnMenu = function (e) {
      var index = $(e.target).index();
      var sectionOffset = $news
      .eq(index)
      .offset()
        .top;
      $(document).off('scroll', scrollPage);
      $('body, html').animate({
        'scrollTop': sectionOffset
      }, function () {
        $(e.target)
        .addClass('anchors__item_active')
        .siblings()
        .removeClass('anchors__item_active');
        $(document).on('scroll', scrollPage);
      });
    },

    addListener = function () {
      $('.anchors').on('click', clickOnMenu);

      $(document).on('scroll', scrollPage);
      $(document).on('scroll', scrollPageFixMenu);

      $(window).on('load', function (e) {
        positionArticle($news);
      });

      $(window).on('resize', function (e) {
        positionArticle($news);
        scrollPageFixMenu();
      })
    };

  return {
    init: addListener
  }
})();

if(doc.querySelector('.blog')){
  scrollMenu.init();
}


var loginForm = (function () {
  var init = function () {
    _setUpListeners();
  };

  var _setUpListeners = function () {
    $('.form-login').on('submit', _login );
  };

  var _login = function (e) {
    e.preventDefault();

    var form = $(this),
      url = 'login.php',
      defObj = _ajaxForm(form, url);

    if(defObj){
      defObj.done(function (ans) {
        console.log('success');
        console.log(ans);
      })
    }
  };
  
  var _ajaxForm = function (form, url) {

    if(!validation.validateForm(form)) return false

    var data = form.serialize();

    var result = $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data
    }).fail(function () {
      console.log('error on server');
    });

    return result;

  };
  
  return{
    init: init
  }
}());

loginForm.init();

var validation = (function () {

  var init = function () {
    _setUpListeners();
  };

  var _setUpListeners = function (element) {
    $('form').on('keydown', '.is-error', _removeError);
    $('form').on('reset', _clearForm);
  };

  var _removeError = function () {
    $(this).removeClass('is-error');
  };

  var _clearForm = function (form) {
    var form = $(this);
    form.find('.is-error').removeClass('is-error');
  };

  var validateForm = function (form) {

    console.log('validation module');

    var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
      valid = true;

    $.each(elements, function (index, val) {
      var elem = $(val),
          val = elem.val();


      if (val.length === 0){

        $(this).parent('.field').addClass('is-error');
        valid = false;
      }
    });

    return valid;
  };

  return {
    init: init,
    validateForm: validateForm
  }
}());

validation.init();

var contact = (function () {

  var init = function () {
    _setUpListeners();
  };

  var _setUpListeners = function (element) {
    $('.form-contact').on('submit', _submitForm);
  };

  var _submitForm = function (e) {
    console.log('form submit');
    e.preventDefault();

    var form = $(this),
      url = 'contact.php',
      defObj = _ajaxForm(form, url);
  };

  var _ajaxForm = function (form, url) {
    console.log('ajax with walidation');
    if(!validation.validateForm(form)) return false

  };

  return {
    init: init,
  }
}());

contact.init();

var aviatitle = {
  generate: function (string, block) {
    var wordsArray = string.split(' '),
      stringArray = string.split(''),
      sentence = [],
      word = '';

    block.text('');

    wordsArray.forEach(function (currentWord) {
      var wordsArray = currentWord.split('');

      wordsArray.forEach(function (letter) {
        var letterHtml = '<span class="letter-span">' + letter + '</span>';

        word += letterHtml;
      });

      var wordHTML = '<span class="letter-word">' + word + '</span>';

      sentence.push(wordHTML);
      word = '';
    });

    block.append(sentence.join(' '));

    // анимация появления
    var letters = block.find('.letter-span'),
      counter = 0,
      timer,
      duration = 500 / stringArray.length;

    function showLetters() {
      var currentLetter = letters.eq(counter);

      currentLetter.addClass('active');
      counter++;

      if (typeof timer !== 'undefined') {
        clearTimeout(timer);
      }

      timer = setTimeout(showLetters, duration);
    }

    showLetters();

  }
};


var Slider = function (container) {
  var nextBtn = container.find('.slider__nav-left'),
    prevBtn = container.find('.slider__nav-right'),
    items = nextBtn.find('.slider__nav-item'),
    display = container.find('.slider__monitor'),
    title = container.find('.block-title'),
    skills = container.find('.slider__info-skils'),
    link = container.find('.show-link'),
    itemsLength = items.length,
    duration = 500,
    flag = true;

  var timeout;

  this.counter = 0;

  // private Генерация разметки кнопки следующий слайд
  var generateMarkups = function () {
    var list = nextBtn.find('.slider__nav-list'),
      markups = list.clone();

    prevBtn
    .prepend(markups)
    .find('.slider__nav-item')
    .removeClass('active')
    .eq(this.counter + 1)
    .addClass('active');
  };
  // Вытащить данные из дата атрибутов для левой части слайдера
  var getDataArrays = function () {
    var dataObject = {
      pics: [],
      title: [],
      skills: [],
      link: []
    };

    $.each(items, function () {
      var $this = $(this);

      dataObject
      .pics
      .push($this.data('full'));
      dataObject
      .title
      .push($this.data('title'));
      dataObject
      .skills
      .push($this.data('skills'));
      dataObject
      .link
      .push($this.data('link'));
    });

    return dataObject;
  };

  var slideInLeftBtn = function (slide) {
    var reqItem = items.eq(slide - 1),
      activeItem = items.filter('.active');

    activeItem
    .stop(true, true)
    .animate({
      'top': '100%'
    }, duration);

    reqItem
    .stop(true, true)
    .animate({
      'top': '0%'
    }, duration, function () {
      $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
      .css('top', '-100%')
    });

  };

  var slideInRightBtn = function (slide) {
    var items = prevBtn.find('.slider__nav-item'),
      activeItem = items.filter('.active'),
      reqSlide = slide + 1;

    if (reqSlide > itemsLength - 1) {
      reqSlide = 0;
    }

    var reqItem = items.eq(reqSlide);

    activeItem
    .stop(true, true)
    .animate({
      'top': '-100%'
    }, duration);

    reqItem
    .stop(true, true)
    .animate({
      'top': '0%'
    }, duration, function () {
      $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
      .css('top', '100%')
    });
  };

  var changeMainPicture = function (slide) {
    var image = display.find('.slider__img');
    var data = getDataArrays();

    image
    .stop(true, true)
    .fadeOut(duration / 2, function () {
      image.attr('src', data.pics[slide]);
      $(this).fadeIn(duration / 2);
    });
  };

  var changeTextData = function (slide) {
    var data = getDataArrays();

    // название работы
    aviatitle.generate(data.title[slide], title, 'ru');

    // описание технологий
    aviatitle.generate(data.skills[slide], skills, 'en');

    // ссылка
    link.attr('href', data.link[slide]);
  };

  // public
  this.setDefaults = function () {
    var _that = this,
      data = getDataArrays();

    // создаем разметку
    generateMarkups();

    // левая кнопка
    nextBtn
    .find('.slider__nav-item')
    .eq(_that.counter - 1)
    .addClass('active');

    // правая кнопка
    prevBtn
    .find('.slider__nav-item')
    .eq(_that.counter + 1)
    .addClass('active');

    // основное изображение
    display
    .find('.slider__img')
    .attr('src', data.pics[_that.counter]);

    // текстовые описания
    changeTextData(_that.counter);

  };

  this.moveSlide = function (direction) {
    var _that = this;


    var directions = {
      next: function () {
        // закольцовывание слайдера
        if (_that.counter < itemsLength - 1) {
          _that.counter++;
        } else {
          _that.counter = 0;
        }
      },

      prev: function () {
        if (_that.counter > 0) {
          _that.counter--;
        } else {
          _that.counter = itemsLength - 1;
        }
      }
    };

    directions[direction]();

    if (flag) {
      flag = false;

      if (typeof timeout != 'undefined') {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        flag = true;
      }, duration + 50);

      slideInLeftBtn(_that.counter);
      slideInRightBtn(_that.counter);
      changeMainPicture(_that.counter);
      changeTextData(_that.counter);
    }
  };
};


var slider = new Slider($('.slider'));
slider.setDefaults();


$('.slider__nav-left').on('click', function (e) {
  e.preventDefault();
  slider.moveSlide('prev');
});

$('.slider__nav-right').on('click', function (e) {
  e.preventDefault();
  slider.moveSlide('next');
});


