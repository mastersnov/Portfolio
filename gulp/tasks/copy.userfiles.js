'use strict';

module.exports = function() {
  $.gulp.task('copy:userfiles', function() {
    return $.gulp.src('./source/userfiles/**/*.*')
    .pipe($.gulp.dest($.config.root + '/userfiles/'));
  });
};
