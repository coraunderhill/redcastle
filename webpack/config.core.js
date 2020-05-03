// Import modules
const path = require('path');

// Set core configuration values to be referenced
module.exports = {
  context: path.resolve(__dirname, '../app'),
  entry: './src',
  module: {
    rules: {
      js: { // JavaScript
        test: /\.js/,
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
    extensions: ['.js', '.json'],
  },
};
