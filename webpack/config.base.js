const { resolve } = require('path');

// Import Webpack plugins
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    styles: resolve(__dirname, '../app/src/renderer/static/scss/main.scss'),
  },
  module: {
    rules: [
      core.module.rules.js,
      { // Fonts
        test: /\.(eot|svg|ttf|woff|woff2)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'res/fonts'
        },
      },
      { // Sass and CSS
        test: /\.(c|sc)ss/,
        loader: [
          {
            loader: MiniCssExtract.loader,
            options: {
              publicPath: '/',
            },
          },
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: '/\.scss/',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  output: {
    filename: 'res/[name].js',
    path: core.output.path,
  },
  plugins: [
    new BundleAnalyzer(),
    new DotEnv(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/renderer/static/ejs/template.ejs',
    }),
    new MiniCssExtract({
      filename: 'res/[name].css',
    }),
  ],
  resolve: core.resolve,
};
