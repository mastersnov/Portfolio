'use strict';

module.exports = function() {
  $.gulp.task('copy:js', function() {
    return $.gulp.src(['./source/js/water/*.js', '!./source/js/app.js.*'])
    // .pipe($.gp.concat('foundation.js'))
    .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
