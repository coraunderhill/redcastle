const { resolve } = require('path');

// Set core configuration values to be referenced
module.exports = {
  context: resolve(__dirname, '../'),
  entry: resolve(__dirname, '../src/renderer/index.js'),
  module: {
    rules: {
      js: { // JavaScript
        test: /\.js$/,
        exclude: [ resolve(__dirname, '../node_modules') ],
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-runtime'],
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
  },
  output: {
    path: resolve(__dirname, '../build'),
  },
  resolve: {
    alias: {
      '@common': resolve(__dirname, '../src/renderer/common'),
      '@components': resolve(__dirname, '../src/renderer/components/'),
      '@static': resolve(__dirname, '../src/renderer/static'),
    },
    extensions: ['.js', '.json', '.scss'],
  },
};
