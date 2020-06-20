// Import modules
const path = require('path');

// Set core configuration values to be referenced
module.exports = {
  context: path.resolve(__dirname, '../app'),
  entry: './src/renderer',
  module: {
    rules: {
      js: { // JavaScript
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-runtime'],
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, '../app/build'),
  },
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, '../app/src/renderer/common'),
      '@components': path.resolve(__dirname, '../app/src/renderer/components'),
      '@static': path.resolve(__dirname, '../app/src/renderer/static'),
    },
    extensions: ['.js', '.json', '.scss', '.css'],
  },
};
