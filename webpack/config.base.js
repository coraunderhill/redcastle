const { resolve } = require('path');

// Import Webpack plugins
const DotEnv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

// Import core configuration values
const core = require('./config.core.js');

// Base configuration
module.exports = {
  name: 'app',
  context: core.context,
  entry: {
    main: core.entry,
    styles: resolve(__dirname, '../src/renderer/static/scss/main.scss'),
  },
  module: {
    rules: [
      core.module.rules.js,
      { // Fonts
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      { // Sass and CSS
        test: /\.(c|sc)ss$/,
        use: [
          { loader: MiniCssExtract.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          { loader: 'sass-loader',
            options: { sourceMap: true, },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        'vendor': {
          test: /node_modules/,
          chunks: 'all',
        },
        'styles': {
          test: '/\.scss/',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  output: {
    filename: '[name].js',
    path: core.output.path,
  },
  plugins: [
    new DotEnv(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/renderer/static/ejs/template.ejs',
    }),
    new MiniCssExtract({
      filename: '[name].css',
    }),
  ],
  resolve: core.resolve,
};
