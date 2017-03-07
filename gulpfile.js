'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  merge: require('merge-stream'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  develop: false
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:js',
    'copy:fonts',
    'copy:userfiles',
    'css:foundation',
    'sprite:svg',
    'sprite:png',
    'copy:image'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
