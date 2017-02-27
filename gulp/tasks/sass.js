'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/main.scss')
      .pipe($.gp.sassGlob())
      .pipe($.gp.if($.config.condition, $.gp.sourcemaps.init()))
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer( $.config.autoprefixerConfig ))
      .pipe($.gp.cssUnit( $.config.cssUnitConfig ))
      .pipe($.gp.if($.config.condition, $.gp.sourcemaps.write()))
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
