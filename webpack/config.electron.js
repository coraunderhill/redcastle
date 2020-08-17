// Import core configuration values
const core = require('./config.core.js');

// Electron configuration
module.exports = {
  name: 'electron',
  context: core.context,
  entry: './src/main',
  module: {
    rules: [
      core.module.rules.js,
    ],
  },
  node: {
    __dirname: true,
  },
  output: {
    filename: 'electron.js',
    path: core.output.path,
  },
  resolve: core.resolve,
  target: 'electron-main',
};
