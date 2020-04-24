// Import modules
const merge = require('webpack-merge');

// Import additional configurations
const base = require('./config.base.js');
const core = require('./config.core.js');
const electron = require('./config.electron.js');

// Common developer configuration values
const common = {
  mode: 'development',
  watch: true,
};

// Electron configuration
const app = merge(common, electron);

// App core configuration
const main = merge(base, common, {
  name: 'main',
  output: {
    filename: 'res/main.js',
  },
  plugins: core.plugins,
  target: 'web',
});

module.exports = [app, main];
