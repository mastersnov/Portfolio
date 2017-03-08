'use strict';
module.exports = function(){
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
};
