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
      '@components': path.resolve(__dirname, '../app/src/renderer/components/Global'),
      '@darwin': path.resolve(__dirname, '../app/src/renderer/components/Darwin'),
      '@static': path.resolve(__dirname, '../app/src/renderer/static'),
      '@win32': path.resolve(__dirname, '../app/src/renderer/components/Win32'),
    },
    extensions: ['.js', '.json', '.scss', '.css'],
  },
};
