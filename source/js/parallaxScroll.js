'use strict';
module.exports = function(){
    var bg = document.querySelector('.first-sect__bg'),
      user = document.querySelector('.first-sect__user'),
      sectText = document.querySelector('.first-sect__text-element');
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
};