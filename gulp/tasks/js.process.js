'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.browserify({
      entries: $.path.app,
      debug: true
    })
    .transform($.babel, {presets: ["es2015"]})
    .bundle()
    .on('error', $.gp.notify.onError({ title: 'JS' }))
    .pipe($.source('app.js'))
    .pipe($.buffer())
    .pipe($.gp.if($.develop, $.gp.sourcemaps.init()))
    // .pipe($.gp.uglify())
    .pipe($.gp.if($.develop, $.gp.sourcemaps.write()))
    .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};