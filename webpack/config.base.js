// Import Webpack plugins
const DotEnvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Import core configuration values
const core = require('./config.core.js');

// Base configuration
module.exports = {
  context: core.context,
  entry: {
    main: core.entry,
    scss: './src/static/scss/main.scss',
  },
  module: {
    rules: [
      core.module.rules.js,
      { // Fonts
        test: /\.(eot|svg|ttf|woff)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'res/fonts'
        },
      },
      { // Sass and CSS
        test: /\.(c|sc)ss/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'res/[name].js',
    path: core.output.path,
  },
  plugins: [
    new DotEnvPlugin(),
    new HtmlWebpackPlugin({
      cache: false,
      template: 'src/static/html/template.html',
    }),
  ],
  resolve: core.resolve,
};
