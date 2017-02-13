'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init($.config.browserSyncConfig);

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
