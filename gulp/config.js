module.exports = {
  root: './build',

  autoprefixerConfig: {
    browsers: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
    cascade: false
  },

  browserSyncConfig: {
    open: true,
    notify: false,
    server: './build'
  },

  cssUnitConfig: {
    type     :    'px-to-rem',
    rootSize :    16
  }
};