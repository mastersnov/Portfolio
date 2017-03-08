'use strict';

var footerHeight = require("./footer-height"),
    blur = require("./blur"),
    parallaxScroll = require("./parallaxScroll"),
    preloader = require("./preloader"),
    scrollMenu = require("./scroll-menu"),
    aviatitle = require("./aviatitle"),
    Slider = require("./slider"),
    validation = require("./validation"),
    contact = require("./contact"),
    loginForm = require("./login-form");


$(document).ready(function () {

  var doc = document;

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

  preloader.init();
});

footerHeight.init();

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



if(doc.querySelector('.blog')){
  scrollMenu.init();
}

loginForm.init();

validation.init();

contact.init();

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


