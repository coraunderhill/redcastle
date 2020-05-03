// Import Webpack plugins
const DotEnvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Import core configuration values
const core = require('./config.core.js');

// Base configuration
module.exports = {
  context: core.context,
  entry: core.entry,
  module: {
    rules: [
      core.module.rules.js,
    ],
  },
  output: core.output,
  plugins: [
    new DotEnvPlugin(),
    new HtmlWebpackPlugin({
      cache: false,
      template: 'src/static/html/template.html',
    }),
  ],
  resolve: core.resolve,
};
