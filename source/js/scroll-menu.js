'use strict';
module.exports = function(){
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
};