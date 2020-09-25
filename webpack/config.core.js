const { resolve } = require('path');

// Import Webpack plugins

// Set core configuration values to be referenced
module.exports = {
  context: resolve(__dirname, '../app'),
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
    path: resolve(__dirname, '../app/build'),
  },
  plugins: [
  ],
  resolve: {
    alias: {
      '@common': resolve(__dirname, '../app/src/renderer/common'),
      '@components': resolve(__dirname, '../app/src/renderer/components/'),
      '@static': resolve(__dirname, '../app/src/renderer/static'),
    },
    extensions: ['.js', '.json', '.scss'],
  },
};
