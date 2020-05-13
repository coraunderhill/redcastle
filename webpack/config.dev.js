// Import Webpack plugins
const merge = require('webpack-merge');

// Import additional configurations
const base = require('./config.base.js');
const clean = require('./config.clean.js');
const electron = require('./config.electron.js');

// Common developer configuration values
const common = {
  mode: 'development',
  watch: true,
};

// App configuration
const app = merge(common, base, {
  node: {
    global: true,
  },
  target: 'electron-renderer',
});

// Electron configuration
const client = merge(common, clean, electron);

module.exports = [client, app];
