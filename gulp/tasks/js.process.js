'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.if($.develop, $.gp.sourcemaps.init()))
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.if($.develop, $.gp.sourcemaps.write()))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
