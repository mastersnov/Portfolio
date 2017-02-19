'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/sprite/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding: 5
    }));
    var imgStream = spriteData.img
      .pipe($.gulp.dest($.config.root + '/assets/img'));

    var cssStream  = spriteData.css
      .pipe($.gulp.dest('./source/style/components/'));

    return $.merge(imgStream, cssStream);
  })
};
