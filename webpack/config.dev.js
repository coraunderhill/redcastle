// Import Webpack plugins
const merge = require('webpack-merge');

// Import additional configurations
const base = require('./config.base.js');
const clean = require('./config.clean.js');
const electron = require('./config.electron.js');
const core = require('./config.core.js');

// Common developer configuration values
const common = {
  mode: 'development',
  watch: true,
};

// Electron configuration
const client = merge(common, clean, electron,);

// App configuration
const app = merge(base, common, {
  name: 'main',
  output: {
    filename: 'res/main.js',
  },
  plugins: core.plugins,
  node: {
    global: true,
  },
  target: 'electron-renderer',
});

module.exports = [client, app];
